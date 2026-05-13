// Api para cargar prooductos

document.addEventListener('DOMContentLoaded', async () => {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    const container = document.getElementById('product-detail-container');

    if (!productId) {
        container.innerHTML = `<div style="text-align:center; grid-column: 1/-1;"><h2>Producto no encontrado</h2><a href="index.html" class="btn">Volver al catálogo</a></div>`;
        return;
    }

    try {
        // Cargar el producto desde la API
        const response = await fetch('/api/products/' + productId);

        if (!response.ok) {
            throw new Error('Producto no encontrado');
        }

        const product = await response.json();

        const description = generateDescription(product);
        const whatsappBuyMsg = encodeURIComponent(`Hola Élite Scents, quiero comprar el *${product.name}* de ${product.price}.`);
        const whatsappBuyLink = `https://wa.me/573015521919?text=${whatsappBuyMsg}`;
        const whatsappAskMsg = encodeURIComponent(`Hola, tengo una pregunta sobre el perfume *${product.name}*...`);
        const whatsappAskLink = `https://wa.me/573015521919?text=${whatsappAskMsg}`;

        container.innerHTML = `
            <div class="detail-image-box"><img src="${product.image}" alt="${product.name}"></div>
            <div class="detail-info">
                <span class="detail-category">${product.category}</span>
                <h1 class="detail-title">${product.name}</h1>
                <div class="detail-price">${product.price}</div>
                <p class="detail-description">${description}</p>
                <div class="detail-actions">
                    <button onclick="addToCart('${product._id}')" class="btn-buy"><i class="fas fa-shopping-cart"></i> Añadir al Carrito</button>
                    <a href="${whatsappAskLink}" target="_blank" class="btn-consult">Consultar Dudas</a>
                </div>
                <p style="font-size: 12px; color: #666; margin-top: 10px;"><i class="fas fa-lock"></i> Compra 100% Segura. Pago contraentrega disponible.</p>
            </div>
        `;

    } catch (error) {
        console.error('Error cargando producto:', error);
        container.innerHTML = `<div style="text-align:center; grid-column: 1/-1;"><h2>Producto no encontrado</h2><a href="index.html" class="btn">Volver al catálogo</a></div>`;
    }
});

function generateDescription(product) {
    const name = product.name.toLowerCase();
    let desc = `Descubre la esencia de <strong>${product.name}</strong>. Una fragancia seleccionada para destacar tu personalidad. `;
    if (name.includes('lattafa') || name.includes('armaf') || name.includes('árabe')) { desc += "Esta joya de la perfumería árabe combina intensidad, duración extrema y notas exóticas. Ideal para dejar una huella imborrable."; }
    else if (name.includes('boss') || name.includes('hugo')) { desc += "El equilibrio perfecto entre elegancia y modernidad. Diseñado para proyectar confianza."; }
    else if (name.includes('carolina') || name.includes('ch ') || name.includes('good girl')) { desc += "Sofisticación pura. Un aroma envolvente y seductor, perfecto para eventos nocturnos."; }
    else if (name.includes('jean paul') || name.includes('gaultier')) { desc += "Atrevido, sensual y magnético. Una fragancia icónica que rompe moldes."; }
    else if (name.includes('versace')) { desc += "Lujo italiano embotellado. Frescura vibrante con un fondo seductor."; }
    else if (name.includes('dior')) { desc += "La excelencia francesa hecha perfume. Notas refinadas y distinción absoluta."; }
    else if (product.category === 'Hombre') { desc += "Con notas masculinas y carácter fuerte. Duración prolongada y estela inolvidable."; }
    else { desc += "Una fragancia femenina, delicada y poderosa. Notas florales y frutales encantadoras."; }
    desc += "<br><br><strong>Calidad 1.1 Garantizada:</strong> La mejor calidad del mercado.";
    return desc;
}
