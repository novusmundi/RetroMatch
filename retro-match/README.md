# RetroMatch 

## Descripción  
**VintageSwipe** es una plataforma innovadora que combina la experiencia de un marketplace vintage con la interactividad de una app estilo Tinder. Su objetivo es ofrecer a los usuarios una forma divertida y única de descubrir ropa y objetos vintage.  

El concepto es simple: cada usuario ve un artículo vintage a la vez en formato de tarjeta.  
- Si hace **swipe a la derecha**, el artículo se añade a su lista de deseos y se abre un chat directo con el vendedor.  
- Si hace **swipe a la izquierda**, simplemente pasa al siguiente artículo.  

¡Así de sencillo y emocionante!  

## Características principales  
1. **Exploración de artículos vintage uno a uno**  
   Los usuarios pueden centrarse en un único artículo a la vez, disfrutando de cada detalle.  
   
2. **Lista de deseos personalizada**  
   Solo con un swipe a la derecha, los artículos favoritos se añaden automáticamente a una lista de deseos.  

3. **Chat directo con vendedores**  
   Al expresar interés en un artículo, los usuarios pueden contactar directamente con el vendedor para discutir detalles.  

4. **Diseño atractivo y minimalista**  
   La interfaz está inspirada en el diseño vintage con un toque moderno, utilizando colores cálidos y una estética elegante.  

## Cómo funciona  
1. **Explora**  
   Al abrir la app, verás una tarjeta con un artículo vintage. Cada tarjeta incluye:  
   - Una foto atractiva del artículo.  
   - Su nombre y descripción.  
   - Precio y detalles del vendedor.  

2. **Haz swipe**  
   - **Swipe a la derecha**: Añade el artículo a tu lista de deseos y abre el chat con el vendedor.  
   - **Swipe a la izquierda**: Pasa al siguiente artículo.  

3. **Conecta**  
   Si un artículo te gusta, utiliza el chat para hablar directamente con el vendedor y completar la compra.  

## Estructura del proyecto  
- **Frontend**: React.js  
- **Backend**: No se utiliza, el proyecto está basado en datos estáticos almacenados en un archivo `data.json`.  
- **Datos**: Los artículos se cargan desde un archivo JSON que contiene información sobre cada producto y su vendedor.  

## Ejemplo de datos en `data.json`  
```json
[
  {
    "id": 1,
    "title": "Chaqueta de cuero vintage",
    "image": "url_a_la_imagen.jpg",
    "description": "Chaqueta de cuero negro de los años 80, en perfecto estado.",
    "price": "40€",
    "seller": {
      "name": "María López",
      "chat": "enlace_falso_chat"
    }
  },
  {
    "id": 2,
    "title": "Vestido floral años 70",
    "image": "url_a_la_imagen.jpg",
    "description": "Vestido largo con estampado floral, perfecto para primavera.",
    "price": "30€",
    "seller": {
      "name": "Juan Pérez",
      "chat": "enlace_falso_chat"
    }
  }
]
