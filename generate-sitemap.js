const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const admin = require('firebase-admin');

// 🔐 Configura Firebase Admin SDK
const serviceAccount = require('./firebase-admin.json'); // <-- Crea este archivo desde Firebase

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// 🌐 Dominio base del sitio
const sitemap = new SitemapStream({
    hostname: 'https://la-vaca-flaca-restaurant.vercel.app'
});

async function generateSitemap() {
    // ✅ Rutas estáticas
    sitemap.write({ url: '/', changefreq: 'weekly', priority: 1.0 });
    sitemap.write({ url: '/category/all', changefreq: 'weekly', priority: 0.9 });
    sitemap.write({ url: '/zonabiker', changefreq: 'monthly', priority: 0.7 });
    sitemap.write({ url: '/cart', changefreq: 'monthly', priority: 0.6 });
    sitemap.write({ url: '/galeria', changefreq: 'monthly', priority: 0.7 });
    sitemap.write({ url: '/contacto', changefreq: 'monthly', priority: 0.8 });
    sitemap.write({ url: '/checkout', changefreq: 'monthly', priority: 0.6 });

    // 🔥 Agrega rutas dinámicas desde Firestore

    // Productos
    const productsSnapshot = await db.collection('products').get();
    productsSnapshot.forEach(doc => {
        sitemap.write({ url: `/item/${doc.id}`, changefreq: 'monthly', priority: 0.6 });
    });

    // Categorías
    const categoriesSnapshot = await db.collection('categories').get();
    categoriesSnapshot.forEach(doc => {
        sitemap.write({ url: `/category/${doc.id}`, changefreq: 'weekly', priority: 0.8 });
    });

    // 📝 Cierra y guarda el archivo
    sitemap.end();
    const data = await streamToPromise(sitemap);
    createWriteStream('./public/sitemap.xml').write(data.toString());

    console.log('✅ Sitemap generado exitosamente');
}

generateSitemap().catch(console.error);
