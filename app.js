const defaultProducts = [
  /* --- DESGLOSE FÓRMULA 1 BATIDO NUTRICIONAL (CL$ 40.377) --- */
  { 
    id: 1, 
    name: "Fórmula 1 Batido Choco-Avellanas", 
    price: 40377, 
    stock: 15, 
    cat: "nutricion", 
    image: "imagenes/batido-chocoavellana.png", 
    desc: "Alimento en Polvo que aporta todos los Nutrientes bajo calorías, carbohidratos y Grasa. SKU#3144.", 
    info: "Proteína de soya aislada de alta pureza, 22 vitaminas y minerales esenciales.", 
    uso: "Mezclar 2 cucharadas soperas (25g) en 250ml de agua o leche descremada.", 
    adv: "Contiene derivados de soya y trazas lácteas.",
    beneficios: "Funciona como un reemplazo de comida rápido, completo y de alta calidad."
  },
  { 
    id: 2, 
    name: "Fórmula 1 Batido Cookies & Cream", 
    price: 40377, 
    stock: 12, 
    cat: "nutricion", 
    image: "imagenes/batido-cookies.png", 
    desc: "Alimento en Polvo que aporta todos los Nutrientes bajo calorías, carbohidratos y Grasa. SKU#0146.", 
    info: "Proteína de soya aislada de alta pureza, 22 vitaminas y minerales esenciales.", 
    uso: "Mezclar 2 cucharadas soperas (25g) en 250ml de agua o leche descremada.", 
    adv: "Contiene derivados de soya y trazas lácteas.",
    beneficios: "Funciona como un reemplazo de comida rápido, completo y de alta calidad."
  },
  { 
    id: 3, 
    name: "Fórmula 1 Batido Chocolate", 
    price: 40377, 
    stock: 10, 
    cat: "nutricion", 
    image: "imagenes/batido-chocolate.png", 
    desc: "Alimento en Polvo que aporta todos los Nutrientes bajo calorías, carbohidratos y Grasa. SKU#0142.", 
    info: "Proteína de soya aislada de alta pureza, 22 vitaminas y minerales esenciales.", 
    uso: "Mezclar 2 cucharadas soperas (25g) en 250ml de agua o leche descremada.", 
    adv: "Contiene derivados de soya y trazas lácteas.",
    beneficios: "Funciona como un reemplazo de comida rápido, completo y de alta calidad."
  },
  { 
    id: 4, 
    name: "Fórmula 1 Batido Dulce de Leche Cremoso", 
    price: 40377, 
    stock: 8, 
    cat: "nutricion", 
    image: "imagenes/batido-dulcedeleche.png", 
    desc: "Alimento en Polvo que aporta todos los Nutrientes bajo calorías, carbohidratos y Grasa. SKU#187K.", 
    info: "Proteína de soya aislada de alta pureza, 22 vitaminas y minerales esenciales.", 
    uso: "Mezclar 2 cucharadas soperas (25g) en 250ml de agua o leche descremada.", 
    adv: "Contiene derivados de soya y trazas lácteas.",
    beneficios: "Funciona como un reemplazo de comida rápido, completo y de alta calidad."
  },
  { 
    id: 5, 
    name: "Fórmula 1 Batido Canela y Especias", 
    price: 40377, 
    stock: 6, 
    cat: "nutricion", 
    image: "imagenes/batido-canela.png", 
    desc: "Alimento en Polvo que aporta todos los Nutrientes bajo calorías, carbohidratos y Grasa. SKU#2638.", 
    info: "Proteína de soya aislada de alta pureza, 22 vitaminas y minerales esenciales.", 
    uso: "Mezclar 2 cucharadas soperas (25g) en 250ml de agua o leche descremada.", 
    adv: "Contiene derivados de soya y trazas lácteas.",
    beneficios: "Funciona como un reemplazo de comida rápido, completo y de alta calidad."
  },
  { 
    id: 6, 
    name: "Fórmula 1 Batido Naranja-Crema", 
    price: 40377, 
    stock: 9, 
    cat: "nutricion", 
    image: "imagenes/batido-naranjacrema.png", 
    desc: "Alimento en Polvo que aporta todos los Nutrientes bajo calorías, carbohidratos y Grasa. SKU#1134.", 
    info: "Proteína de soya aislada de alta pureza, 22 vitaminas y minerales esenciales.", 
    uso: "Mezclar 2 cucharadas soperas (25g) en 250ml de agua o leche descremada.", 
    adv: "Contiene derivados de soya y trazas lácteas.",
    beneficios: "Funciona como un reemplazo de comida rápido, completo y de alta calidad."
  },
  { 
    id: 7, 
    name: "Fórmula 1 Batido Banana Caramelo", 
    price: 40377, 
    stock: 11, 
    cat: "nutricion", 
    image: "imagenes/batido-bananacaramelo.png", 
    desc: "Alimento en Polvo que aporta todos los Nutrientes bajo calorías, carbohidratos y Grasa. SKU#1522.", 
    info: "Proteína de soya aislada de alta pureza, 22 vitaminas y minerales esenciales.", 
    uso: "Mezclar 2 cucharadas soperas (25g) en 250ml de agua o leche descremada.", 
    adv: "Contiene derivados de soya y trazas lácteas.",
    beneficios: "Funciona como un reemplazo de comida rápido, completo y de alta calidad."
  },
  { 
    id: 8, 
    name: "Fórmula 1 Batido Frutilla", 
    price: 40377, 
    stock: 14, 
    cat: "nutricion", 
    image: "imagenes/batido-frutilla.png", 
    desc: "Alimento en Polvo que aporta todos los Nutrientes bajo calorías, carbohidratos y Grasa. SKU#0143.", 
    info: "Proteína de soya aislada de alta pureza, 22 vitaminas y minerales esenciales.", 
    uso: "Mezclar 2 cucharadas soperas (25g) en 250ml de agua o leche descremada.", 
    adv: "Contiene derivados de soya y trazas lácteas.",
    beneficios: "Funciona como un reemplazo de comida rápido, completo y de alta calidad."
  },

  /* --- DESGLOSE PROTEÍNA EN POLVO PERSONALIZADA (CL$ 32.979) --- */
  { 
    id: 9, 
    name: "Proteína en Polvo Personalizada (PPP) Original", 
    price: 32979, 
    stock: 12, 
    cat: "nutricion", 
    image: "imagenes/ppp.png", 
    desc: "Aumenta la cantidad de Proteína proporcionada. Sabor neutro. SKU#0242.", 
    info: "Aislado de proteína de soya y concentrado de proteína de suero de leche.", 
    uso: "Añadir 1 o 2 porciones (5g a 10g) directo a tu batido nutricional regular o comidas.", 
    adv: "No recomendable para menores de 15 años sin supervisión.",
    beneficios: "Permite personalizar la ingesta proteica diaria según tus requerimientos."
  },
  { 
    id: 10, 
    name: "Proteína en Polvo Personalizada (PPP) Frutos rojos", 
    price: 32979, 
    stock: 10, 
    cat: "nutricion", 
    image: "imagenes/ppp-rojos.png", 
    desc: "Aumenta la cantidad de Proteína proporcionada con un delicioso sabor. SKU#2648.", 
    info: "Proteína de soya de alta calidad con saborizante natural a frutos rojos.", 
    uso: "Añadir 1 o 2 porciones directo a tu batido o preparaciones fit.", 
    adv: "Almacenar en un lugar fresco y seco.",
    beneficios: "Ideal para dar variedad de sabor dulce a tus recetas sin sumar carbohidratos pesados."
  },

  /* --- DESGLOSE TÉ Y HIERBAS INSTANTÁNEO FORMATO GRANDE (CL$ 56.549) --- */
  { 
    id: 11, 
    name: "Té y Hierbas Instantáneo 102g Original", 
    price: 56549, 
    stock: 7, 
    cat: "salud", 
    image: "imagenes/te-102.png", 
    desc: "Acelera la pérdida de grasa corporal, energético natural. Sabor Original 102g. SKU#0106.", 
    info: "Extracto de té verde, té negro, extracto de semilla de cardamomo y malva silvestre.", 
    uso: "Disolver media cucharadita de café en una taza de agua caliente en ayunas.", 
    adv: "Contiene cafeína natural. No recomendado para embarazadas.",
    beneficios: "Estimula la termogénesis celular, aumentando el gasto calórico diario incluso en reposo."
  },

  /* --- DESGLOSE TÉ Y HIERBAS INSTANTÁNEO FORMATO CHICO (CL$ 32.300) --- */
  { 
    id: 12, 
    name: "Té y Hierbas Instantáneo 51g Limón", 
    price: 32300, 
    stock: 14, 
    cat: "salud", 
    image: "imagenes/te-51-limon.png", 
    desc: "Acelera la pérdida de grasa corporal y ayuda a controlar la ansiedad. Sabor Limón 51g. SKU#0255.", 
    info: "Mezcla de té verde y extractos herbales purificados con sabor natural a limón.", 
    uso: "Consumir frío o caliente entre las comidas principales del día.", 
    adv: "Evitar su consumo excesivo en horarios cercanos al descanso nocturno.",
    beneficios: "Ofrece las mismas propiedades termogénicas del formato grande en un formato práctico."
  },
  { 
    id: 13, 
    name: "Té y Hierbas Instantáneo 51g Frambuesa", 
    price: 32300, 
    stock: 14, 
    cat: "salud", 
    image: "imagenes/te-51-frambuesa.png", 
    desc: "Acelera la pérdida de grasa corporal and ayuda a controlar la ansiedad. Sabor Frambuesa 51g. SKU#0256.", 
    info: "Mezcla de té verde y extractos herbales purificados con sabor natural a frambuesa.", 
    uso: "Consumir frío o caliente entre las comidas principales del día.", 
    adv: "Evitar su consumo excesivo en horarios cercanos al descanso nocturno.",
    beneficios: "Ofrece las mismas propiedades termogénicas del formato grande en un formato práctico."
  },
  { 
    id: 14, 
    name: "Té y Hierbas Instantáneo 51g Chai", 
    price: 32300, 
    stock: 14, 
    cat: "salud", 
    image: "imagenes/te-51-chai.png", 
    desc: "Acelera la pérdida de grasa corporal and ayuda a controlar la ansiedad. Sabor Chai 51g. SKU#1638.", 
    info: "Mezcla de té verde y extractos herbales purificados con especias estilo chai.", 
    uso: "Consumir frío o caliente entre las comidas principales del día.", 
    adv: "Evitar su consumo excesivo en horarios cercanos al descanso nocturno.",
    beneficios: "Ofrece las mismas propiedades termogénicas del formato grande en un formato práctico."
  },

  /* --- DESGLOSE TÉ N-R-G (CL$ 25.656) --- */
  { 
    id: 15, 
    name: "Té N-R-G Original", 
    price: 25656, 
    stock: 18, 
    cat: "salud", 
    image: "imagenes/nrg.png", 
    desc: "Apoya el estado de concentración and ayuda a sentirse energizado. Sabor Original. SKU#0102.", 
    info: "Extracto de semilla de guaraná puro y té pekoe concentrado.", 
    uso: "Disolver media cucharadita en un vaso de agua fría antes de estudiar o entrenar.", 
    adv: "No exceder de 3 porciones diarias para evitar sobreestimulación.",
    beneficios: "Eleva de forma progresiva y sostenida la agilidad mental y la resistencia física."
  },
  { 
    id: 16, 
    name: "Té N-R-G Guaraná Tropical", 
    price: 25656, 
    stock: 18, 
    cat: "salud", 
    image: "imagenes/nrg-tropical.png", 
    desc: "Apoya el estado de concentración and ayuda a sentirse energizado. Sabor Guaraná Tropical. SKU#075K.", 
    info: "Extracto de semilla de guaraná puro con notas de frutas tropicales.", 
    uso: "Disolver media cucharadita en un vaso de agua antes de entrenar.", 
    adv: "No exceder de 3 porciones diarias.",
    beneficios: "Eleva la resistencia física y el enfoque sin picos de nerviosismo."
  },

  /* --- DESGLOSE CONCENTRADO DE ALOE VERA (CL$ 42.857) --- */
  { 
    id: 17, 
    name: "Concentrado de Aloe Vera Uva", 
    price: 42857, 
    stock: 9, 
    cat: "salud", 
    image: "imagenes/aloe-uva.png", 
    desc: "Ayuda a mantener la salud gastrointestinal, desinflama y cicatriza. Sabor Uva. SKU#1610.", 
    info: "Aloe vera purificado libre de aloína con exquisito sabor uva.", 
    uso: "Mezclar 3 tapas llenas del producto en un vaso de agua antes del desayuno.", 
    adv: "Mantener firmemente refrigerado una vez abierto.",
    beneficios: "Actúa como un bálsamo interno que alivia de manera inmediata la acidez estomacal."
  },
  { 
    id: 18, 
    name: "Concentrado de Aloe Vera Mango", 
    price: 42857, 
    stock: 9, 
    cat: "salud", 
    image: "imagenes/aloe-mango.png", 
    desc: "Ayuda a mantener la salud gastrointestinal, desinflama y cicatriza. Sabor Mango. SKU#1065.", 
    info: "Aloe vera purificado libre de aloína con exquisito sabor mango.", 
    uso: "Mezclar 3 tapas llenas del producto en un vaso de agua antes del desayuno.", 
    adv: "Mantener firmemente refrigerado una vez abierto.",
    beneficios: "Actúa como un bálsamo interno que alivia de manera inmediata la acidez estomacal."
  },
  { 
    id: 19, 
    name: "Concentrado de Aloe Vera Mandarina", 
    price: 42857, 
    stock: 9, 
    cat: "salud", 
    image: "imagenes/aloe-mandarina.png", 
    desc: "Ayuda a mantener la salud gastrointestinal, desinflama y cicatriza. Sabor Mandarina. SKU#2631.", 
    info: "Aloe vera purificado libre de aloína con exquisito sabor mandarina.", 
    uso: "Mezclar 3 tapas llenas del producto en un vaso de agua antes del desayuno.", 
    adv: "Mantener firmemente refrigerado una vez abierto.",
    beneficios: "Actúa como un bálsamo interno que alivia de manera inmediata la acidez estomacal."
  },

  /* --- OTROS PRODUCTOS OFICIALES DEL PANEL NUTRICIONAL --- */
  { 
    id: 20, 
    name: "Protein Drink Mix (PDM)", 
    price: 51678, 
    stock: 8, 
    cat: "nutricion", 
    image: "imagenes/pdm.png", 
    desc: "Polvo para preparar una bebida que contiene proteínas de alta calidad. Sabor Vainilla. SKU#1122.", 
    info: "24g de proteína por porción, fortificado con vitaminas y minerales esenciales.", 
    uso: "Disolver 2 cucharadas en 250ml de agua fría o mezclar junto al batido nutricional.", 
    adv: "Contiene una fuente de fenilalanina.",
    beneficios: "Es el sustituto perfecto de la leche para tus batidos, dándoles una consistencia mucho más cremosa."
  },
  { 
    id: 21, 
    name: "Protein Iced Coffee Moka", 
    price: 56537, 
    stock: 6, 
    cat: "salud", 
    image: "imagenes/coffee.png", 
    desc: "Café Helado Alto en Proteína con 15 g de proteína de alta calidad para un impulso de enfoque. SKU#011K.", 
    info: "Granos de café premium 100% Robusta, whey protein isolate.", 
    uso: "Disolver 2 cucharadas en agua muy fría y batir enérgicamente con cubos de hielo.", 
    adv: "Contiene cafeína. Evitar de noche.",
    beneficios: "Entrega energía limpia y cafeína de enfoque sin sumar azúcares añadidos."
  },
  { 
    id: 22, 
    name: "Fibra Activa Manzana", 
    price: 39504, 
    stock: 11, 
    cat: "salud", 
    image: "imagenes/fibra.png", 
    desc: "Sabor Manzana. Ayuda con la digestión, promueve la limpieza y absorción intestinal. SKU#2864.", 
    info: "Fibra de caña de azúcar, fibra de cítricos, fibra de soya y prebiótico inulina.", 
    uso: "Disolver una cucharada dosificadora en un vaso de agua o mezclar con el Aloe.", 
    adv: "Se sugiere consumir junto a abundante agua.",
    beneficios: "Regulariza el tránsito intestinal lento de manera natural y suave."
  },
  { 
    id: 23, 
    name: "Nutri Muffin Chocolate", 
    price: 32118, 
    stock: 6, 
    cat: "nutricion", 
    image: "imagenes/muffin.png", 
    desc: "Es un alimento en polvo para preparar un queque nutritivo sabor chocolate rápido. SKU#313K.", 
    info: "Proteína concentrada de leche, cacao en polvo premium, fibra de avena.", 
    uso: "Mezclar 2 medidas con 30ml de agua en una taza y cocinar al microondas por 1 minuto.", 
    adv: "Contiene gluten.",
    beneficios: "La solución perfecta para calmar la ansiedad por el dulce de forma saludable."
  },
  { 
    id: 24, 
    name: "F1 Nutri Soup Pollo con Vegetales", 
    price: 38454, 
    stock: 5, 
    cat: "nutricion", 
    image: "imagenes/soup.png", 
    desc: "Sopa especialmente diseñada para la inclusión en un programa de control de peso. SKU#0748.", 
    info: "Proteína de soya aislada, verduras deshidratadas, mezcla mineral optimizada.", 
    uso: "Disolver 3 cucharadas en 200ml de agua caliente revolviendo constantemente.", 
    adv: "Bajo contenido en sodio.",
    beneficios: "Es la mejor alternativa proteica salada para sustituir comidas pesadas en la noche."
  },
  { 
    id: 25, 
    name: "Beverage Mix Mix Frutal", 
    price: 34943, 
    stock: 10, 
    cat: "nutricion", 
    image: "imagenes/beverage.png", 
    desc: "Refrescante bebida que proporciona 15g de proteína por porción. SKU#093K.", 
    info: "15g de proteína aislada de suero de leche por porción, libre de azúcar.", 
    uso: "Mezclar 2 cucharadas en 250ml de agua fría con hielo a media tarde.", 
    adv: "Mantener el envase cerrado herméticamente.",
    beneficios: "Es una alternativa ligera, líquida y frutal perfecta para calmar antojos."
  },
  { 
    id: 26, 
    name: "Collagen Drink Limonada de Fresa", 
    price: 44422, 
    stock: 8, 
    cat: "salud", 
    image: "imagenes/colageno.png", 
    desc: "Deliciosa bebida sabor Limonada de fresa fortificada para la elasticidad de la piel. SKU#3987.", 
    info: "Contiene péptidos bioactivos de colágeno Verisol, Vitaminas A, C, E y Biotina.", 
    uso: "Tomar una cucharada dosificadora al día disuelta en agua.", 
    adv: "Consumir de forma continua.",
    beneficios: "Contribuye con la elasticidad y disminución de líneas de expresión en la piel, cabello y uñas."
  },
  { 
    id: 27, 
    name: "Protein Crunch Chocolate", 
    price: 15966, 
    stock: 20, 
    cat: "nutricion", 
    image: "imagenes/crunch.png", 
    desc: "Crocante de proteínas suplementado con hierro sabor Chocolate. SKU#040K.", 
    info: "Crocantes de proteína de soya texturizada, hierro aminoquelado.", 
    uso: "Añadir 1 o 2 cucharadas como topping saludable sobre batidos, yogur o frutas.", 
    adv: "Contiene soya.",
    beneficios: "Añade una textura crujiente y divertida a tus preparaciones saludables."
  },
  { 
    id: 28, 
    name: "Xtra-Cal", 
    price: 18716, 
    stock: 13, 
    cat: "salud", 
    image: "imagenes/cal.png", 
    desc: "Fórmula exclusiva de Calcio y otros minerales esenciales. SKU#0020. 90 tabletas.", 
    info: "Calcio carbonato, carbonato de magnesio, zinc, cobre y Vitamina D3.", 
    uso: "Tomar una tableta diaria acompañada de un vaso de agua.", 
    adv: "No exceder la porción diaria recomendada.",
    beneficios: "Garantiza una correcta densidad ósea apoyando la estructura de tu cuerpo."
  },
  { 
    id: 29, 
    name: "F2 Complejo Multivitamínico", 
    price: 18380, 
    stock: 15, 
    cat: "salud", 
    image: "imagenes/multi.png", 
    desc: "Provee 22 vitaminas y minerales esenciales para complementar una buena nutrición. SKU#3122. 90 tabletas.", 
    info: "Vitaminas A, C, E, complejo B, Zinc, Magnesio y Calcio.", 
    uso: "Tomar 1 tableta diaria junto con la comida principal.", 
    adv: "Su uso complementa una dieta equilibrada.",
    beneficios: "Cubre las brechas de micronutrientes optimizando la vitalidad celular diaria."
  },
  { 
    id: 30, 
    name: "Beta Glucanor", 
    price: 48452, 
    stock: 4, 
    cat: "salud", 
    image: "imagenes/beta.png", 
    desc: "Ayuda a reducir y nivelar el colesterol en la sangre. SKU#0267. Formato 229g.", 
    info: "Fibra de avena pura concentrada rica en Beta-glucanos activos.", 
    uso: "Consumir una porción diaria disuelta en agua, jugo o en tu batido regular.", 
    adv: "Los efectos se consolidan manteniendo un consumo diario constante.",
    beneficios: "Verificado clínicamente para optimizar los niveles saludables de lípidos corporales."
  },
  { 
    id: 31, 
    name: "Herbalifeline", 
    price: 44964, 
    stock: 12, 
    cat: "salud", 
    image: "imagenes/omega.png", 
    desc: "Cápsulas de Omega 3 de alta calidad para mantener niveles estables de triglicéridos. SKU#0065. 60 tabletas.", 
    info: "Aceite de pescado premium rico en EPA y DHA.", 
    uso: "Consumir 1 cápsula blanda al día junto con las comidas principales.", 
    adv: "Contiene ingredientes derivados de pescado.",
    beneficios: "Protege la salud cardiovascular sin dejar molesto reflujo gracias a sus aceites de menta."
  },
  { 
    id: 32, 
    name: "Liftoff Naranja", 
    price: 25982, 
    stock: 11, 
    cat: "salud", 
    image: "imagenes/liftoff.png", 
    desc: "Bebida efervescente en polvo sabor naranja para la sensación de energía mental. SKU#204K. 10 sobres.", 
    info: "Formulado con Panax ginseng, cafeína pura, taurina y Vitamina C.", 
    uso: "Disolver un sobre efervescente en un vaso de 250ml de agua fría.", 
    adv: "Contiene cafeína. Moderar su uso si es altamente sensible.",
    beneficios: "Entrega una ráfaga inmediata de enfoque y lucidez mental."
  },
  { 
    id: 33, 
    name: "Sport Activador", 
    price: 39014, 
    stock: 7, 
    cat: "salud", 
    image: "imagenes/activador.png", 
    desc: "Colabora con el rendimiento deportivo y la correcta eliminación de grasas. SKU#3123.", 
    info: "Adición de L-Carnitina y vitaminas del grupo B y E.", 
    uso: "Tomar una porción antes de iniciar bloques cardiovasculares o de fuerza.", 
    adv: "Almacenar protegido del sol.",
    beneficios: "Facilita que los ácidos grasos sean utilizados eficientemente como energía."
  },
  { 
    id: 34, 
    name: "Herbalife Pro", 
    price: 47347, 
    stock: 5, 
    cat: "salud", 
    image: "imagenes/herbalife-pro.png", 
    desc: "Suplemento alimenticio enfocado en el fortalecimiento del sistema inmunológico. SKU#047K.", 
    info: "Contiene EpiCor, vitaminas C, D y Zinc de alta asimilación biológica.", 
    uso: "Mezclar una porción al día con tu bebida favorita.", 
    adv: "Mantener en un lugar fresco.",
    beneficios: "Apoya la resistencia inmunitaria diaria frente a cambios ambientales estacionales."
  },
  { 
    id: 35, 
    name: "Rebuild Strength Chocolate", 
    price: 61105, 
    stock: 6, 
    cat: "nutricion", 
    image: "imagenes/rebuild.png", 
    desc: "Ayuda a la recuperación muscular inmediata gracias a su mezcla secuencial láctea. SKU#1417.", 
    info: "24g de proteína de suero y caseína, L-Glutamina, BCAAs y hierro. Sabor Chocolate.", 
    uso: "Consumir dentro de los 30 minutos post-entrenamiento.", 
    adv: "Contiene alérgenos derivados de la leche.",
    beneficios: "Acelera de forma eficiente la síntesis proteica post-entrenamiento."
  },
  { 
    id: 36, 
    name: "CR7 Drive Acai - Frutos Rojos", 
    price: 37695, 
    stock: 9, 
    cat: "salud", 
    image: "imagenes/cr7.png", 
    desc: "Bebida deportiva avanzada para mejorar la hidratación. Sabor Acai - Frutos Rojos. SKU#1478.", 
    info: "Aporte controlado de electrolitos vitales indispensables (magnesio, sodio, potasio).", 
    uso: "Consumir directamente durante la actividad física intensa.", 
    adv: "Libre de saborizantes y edulcorantes artificiales.",
    beneficios: "Acelera la rehidratación celular evitando calambres y fatigas musculares."
  },

  /* --- LÍNEA COSMÉTICA Y BIENESTAR: HERBALIFE SKIN --- */
  { 
    id: 37, 
    name: "Limpiador Cítrico para la Piel", 
    price: 28776, 
    stock: 10, 
    cat: "salud", 
    image: "imagenes/skin-limpiador.png", 
    desc: "Herbalife SKIN #0766. Remueve impurezas profundas dejando tu piel radiante.", 
    info: "Fórmula con microperlas de limpieza profunda y aromas frutales.", 
    uso: "Aplicar en el rostro húmedo con masajes circulares y enjuagar con agua tibia.", 
    adv: "Evitar el contacto directo con los ojos.",
    beneficios: "Limpia y refresca la dermis eliminando el exceso de oleosidad."
  },
  { 
    id: 38, 
    name: "Tonificador Energizante de Hierbas", 
    price: 21818, 
    stock: 8, 
    cat: "salud", 
    image: "imagenes/skin-tonificador.png", 
    desc: "Herbalife SKIN #0767. Brinda una profunda hidratación y refresca la piel cansada.", 
    info: "Extracto de hierbas naturales purificadas sin alcohol añadido.", 
    uso: "Rociar ligeramente sobre el rostro limpio por la mañana y por la noche.", 
    adv: "Uso externo exclusivamente.",
    beneficios: "Prepara la superficie cutánea para absorber mejor los sérums e hidratantes diarios."
  },
  { 
    id: 39, 
    name: "Sérum Reductor de Líneas", 
    price: 64770, 
    stock: 5, 
    cat: "salud", 
    image: "imagenes/skin-serum.png", 
    desc: "Herbalife SKIN #0768. Tratamiento concentrado multifuncional para mitigar signos de envejecimiento.", 
    info: "Clínicamente testeado para mejorar la firmeza y suavidad cutánea.", 
    uso: "Aplicar unas gotas en el rostro y cuello con toques suaves antes de la crema de día.", 
    adv: "Mantener cerrado en un lugar fresco.",
    beneficios: "Disminuye de forma notoria las líneas de expresión finas en pocas semanas."
  },
  { 
    id: 40, 
    name: "Exfoliante Instantáneo con Arándanos", 
    price: 22504, 
    stock: 7, 
    cat: "salud", 
    image: "imagenes/skin-exfoliante.png", 
    desc: "Herbalife SKIN #0772. Remueve de manera sutil las células muertas de la piel.", 
    info: "Enriquecido con antioxidantes provenientes de extractos de arándanos premium.", 
    uso: "Utilizar de 1 a 3 veces por semana sobre la piel húmeda y retirar con agua.", 
    adv: "No aplicar sobre piel irritada o heridas abiertas.",
    beneficios: "Suaviza la textura del rostro de manera instantánea promoviendo la renovación celular."
  },
  { 
    id: 41, 
    name: "Mascarilla Purificadora de Arcilla con Menta", 
    price: 24394, 
    stock: 6, 
    cat: "salud", 
    image: "imagenes/skin-mascarilla.png", 
    desc: "Herbalife SKIN #0773. Absorbe grasitudes profundas y minimiza la apariencia de poros.", 
    info: "Arcilla bentonita premium con efecto refrescante de menta natural.", 
    uso: "Dejar actuar de 5 a 10 minutos sobre el rostro y remover completamente.", 
    adv: "No ingerir.",
    beneficios: "Refina la claridad cutánea dejando un acabado mate sedoso impecable."
  },
  { 
    id: 42, 
    name: "Crema Humectante Protectora Día FPS 30", 
    price: 48791, 
    stock: 8, 
    cat: "salud", 
    image: "imagenes/skin-crema.png", 
    desc: "Herbalife SKIN #0899. Humectación duradera con protección solar de amplio espectro.", 
    info: "Protección FPS 30 certificada contra rayos UVA/UVB.", 
    uso: "Aplicar uniformemente por la mañana posterior a la rutina de limpieza.", 
    adv: "Reaplicar en caso de exposición solar de largo aliento.",
    beneficios: "Mantiene la barrera de humectación natural defendiendo la piel contra el sol."
  },

  /* --- LÍNEA CORPORAL Y CAPILAR: HERBAL ALOE --- */
  { 
    id: 43, 
    name: "Acondicionador Fortificante", 
    price: 14534, 
    stock: 12, 
    cat: "salud", 
    image: "imagenes/aloe-acondicionador.png", 
    desc: "Herbal Aloe #2565. Hidratación profunda capilar que repara el cabello dañado.", 
    info: "Formulado con aloe vera puro y microproteínas de origen vegetal.", 
    uso: "Masajear sobre el cabello húmedo después del shampoo y aclarar con abundante agua.", 
    adv: "En caso de reacción desfavorable suspender su uso.",
    beneficios: "Deja el cabello sedoso, fuerte y reduce la estática o frizz notablemente."
  },
  { 
    id: 44, 
    name: "Crema para manos y cuerpo", 
    price: 14534, 
    stock: 15, 
    cat: "salud", 
    image: "imagenes/aloe-crema.png", 
    desc: "Herbal Aloe #2563. Nutrición dérmica ligera de absorción ultra veloz para todo el cuerpo.", 
    info: "Aporte continuo de hidratación celular botánica libre de parabenos.", 
    uso: "Aplicar diariamente por todo el cuerpo de manera uniforme.", 
    adv: "Para uso familiar.",
    beneficios: "Alivia la resequedad de la piel áspera al instante dejándola tersa."
  },
  { 
    id: 45, 
    name: "Shampoo Fortificante", 
    price: 14534, 
    stock: 12, 
    cat: "salud", 
    image: "imagenes/aloe-shampoo.png", 
    desc: "Herbal Aloe #2564. Limpieza capilar revitalizante que resguarda la fibra desde la raíz.", 
    info: "Protege el color del cabello teñido y limpia sin sulfatos agresivos.", 
    uso: "Aplicar sobre el cabello mojado, generar espuma abundante y enjuagar.", 
    adv: "Mantener fuera del alcance de los niños.",
    beneficios: "Fortalece las hebras capilares reduciendo el quiebre por cepillado."
  },
  { 
    id: 46, 
    name: "Gel refrescante corporal", 
    price: 14534, 
    stock: 14, 
    cat: "salud", 
    image: "imagenes/aloe-gel.png", 
    desc: "Herbal Aloe #2562. Gel calmante ideal para aliviar e hidratar la piel sobreexpuesta.", 
    info: "Extracto concentrado de Aloe Vera puro y plantas botánicas calmantes.", 
    uso: "Colocar generosamente sobre zonas resecas o expuestas al sol.", 
    adv: "Ideal para usar post-ducha.",
    beneficios: "Refresca y disminuye la sensación de tirantez o calor de forma inmediata."
  },

  /* --- SERVICIOS DE ESTÉTICA: DIVINAS Y DIVAS --- */
  {
    id: 47,
    name: "Esmaltado Permanente",
    price: 12000,
    stock: 999,
    cat: "belleza",
    image: "imagenes/esmaltado.png",
    desc: "", info: "", uso: "", adv: "", beneficios: ""
  },
  {
    id: 48,
    name: "Uñas Acrílicas",
    price: 20000,
    stock: 999,
    cat: "belleza",
    image: "imagenes/acrilicas.png",
    desc: "", info: "", uso: "", adv: "", beneficios: ""
  },
  {
    id: 49,
    name: "Acrílicas XI desde 1,4",
    price: 30000,
    stock: 999,
    cat: "belleza",
    image: "imagenes/acrilicas-xl.png",
    desc: "", info: "", uso: "", adv: "", beneficios: ""
  },
  {
    id: 50,
    name: "Retiro Esmaltado Permanente",
    price: 3000,
    stock: 999,
    cat: "belleza",
    image: "imagenes/retiro-permanente.png",
    desc: "", info: "", uso: "", adv: "", beneficios: ""
  },
  {
    id: 51,
    name: "Retiro Soft Gel o Polygel",
    price: 6000,
    stock: 999,
    cat: "belleza",
    image: "imagenes/retiro-softgel.png",
    desc: "", info: "", uso: "", adv: "", beneficios: ""
  },
  {
    id: 52,
    name: "Retiro de Acrílicas",
    price: 8000,
    stock: 999,
    cat: "belleza",
    image: "imagenes/retiro-acrilicas.png",
    desc: "", info: "", uso: "", adv: "", beneficios: ""
  },
  {
    id: 53,
    name: "Lifting de Pestañas",
    price: 20000,
    stock: 999,
    cat: "belleza",
    image: "imagenes/lifting.png",
    desc: "",
    info: "El lifting incluye ondulado, tinte, botox e hidratación para tus pestañas.",
    uso: "", adv: "", beneficios: ""
  },
  {
    id: 54,
    name: "Pestañas Efecto Natural",
    price: 20000,
    stock: 999,
    cat: "belleza",
    image: "imagenes/pestanas-natural.png",
    desc: "", info: "", uso: "", adv: "", beneficios: ""
  },
  {
    id: 55,
    name: "Pestañas Efecto Rímel",
    price: 25000,
    stock: 999,
    cat: "belleza",
    image: "imagenes/pestanas-rimel.png",
    desc: "", info: "", uso: "", adv: "", beneficios: ""
  },
  {
    id: 56,
    name: "Pestañas Volumen Tecnológico 2D",
    price: 30000,
    stock: 999,
    cat: "belleza",
    image: "imagenes/volumen-2d.png",
    desc: "", info: "", uso: "", adv: "", beneficios: ""
  },
  {
    id: 57,
    name: "Pestañas Volumen Tecnológico 3D",
    price: 35000,
    stock: 999,
    cat: "belleza",
    image: "imagenes/volumen-3d.png",
    desc: "", info: "", uso: "", adv: "", beneficios: ""
  },
  {
    id: 58,
    name: "Perfilado de Cejas",
    price: 15000,
    stock: 999,
    cat: "belleza",
    image: "imagenes/perfilado.png",
    desc: "",
    info: "Procedimiento: visagismo + depilación con hilo.",
    uso: "", adv: "", beneficios: ""
  },
  {
    id: 59,
    name: "Perfilado + Pigmentación con Henna",
    price: 35000,
    stock: 999,
    cat: "belleza",
    image: "imagenes/perfilado-henna.png",
    desc: "", info: "", uso: "", adv: "", beneficios: ""
  }
];

localStorage.setItem("gym_products", JSON.stringify(defaultProducts));
let products = defaultProducts;

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let reservations = JSON.parse(localStorage.getItem("reservations")) || [];

document.addEventListener("DOMContentLoaded", () => {
  updateNavBadge();
  switchStoreTab("herbalife");
});

function toggleCartSidebar() {
  const sidebar = document.getElementById("cart-sidebar");
  if (sidebar) sidebar.classList.toggle("open");
}

function addProduct(name, price, qty = 1) {
  let prod = products.find(p => p.name === name);
  let currentStock = prod ? prod.stock : 99; 
  let item = cart.find(p => p.name === name);
  let requestedQty = item ? item.qty + parseInt(qty) : parseInt(qty);

  const esSuscripcion = name.toLowerCase().includes("plan") || name.toLowerCase().includes("personalizado");

  if (requestedQty > currentStock && !esSuscripcion) {
    alert("Stock insuficiente. Solo quedan " + currentStock + " unidades."); return;
  }

  if (esSuscripcion) {
    cart = cart.filter(p => !p.name.toLowerCase().includes("plan") && !p.name.toLowerCase().includes("personalizado"));
    cart.push({ name, price, qty: 1 });
  } else {
    if (item) { item.qty = requestedQty; } else { cart.push({ name, price, qty: parseInt(qty) }); }
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateNavBadge();
  renderCart();
  document.getElementById("cart-sidebar").classList.add("open");
}

function changeQtySidebar(name, delta) {
  let item = cart.find(p => p.name === name);
  if (!item) return;
  let prod = products.find(p => p.name === name);
  let currentStock = prod ? prod.stock : 99;
  const esSuscripcion = name.toLowerCase().includes("plan") || name.toLowerCase().includes("personalizado");

  if (delta > 0 && item.qty + 1 > currentStock && !esSuscripcion) {
    alert("Límite de inventario alcanzado."); return;
  }
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(p => p.name !== name);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateNavBadge(); renderCart();
}

function clearCart() {
  cart = []; localStorage.setItem("cart", JSON.stringify(cart));
  updateNavBadge(); renderCart();
}

function updateNavBadge() {
  const badge = document.getElementById("nav-count"); if (!badge) return;
  let totalItems = cart.reduce((acc, p) => acc + p.qty, 0);
  badge.textContent = totalItems;
  badge.style.display = totalItems > 0 ? "inline-block" : "none";
}

function renderCart() {
  const list = document.getElementById("cart-items-list");
  const totalEl = document.getElementById("cart-sidebar-total");
  if (!list) return; list.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    list.innerHTML = "<p style='color:#aaa; font-style:italic;'>El carro está vacío.</p>";
    if (totalEl) totalEl.textContent = "$0"; return;
  }

  cart.forEach(p => {
    let subtotal = p.price * p.qty;
    total += subtotal;

    const div = document.createElement("div"); div.className = "cart-item";
    const esSuscripcion = p.name.toLowerCase().includes("plan") || p.name.toLowerCase().includes("personalizado");

    div.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px; color:#fff;">
        <span style="max-width:140px; font-weight:600;">${p.name}</span>
        ${esSuscripcion ? '<span>1</span>' : `
          <div style="display:flex; gap:6px;">
            <button onclick="changeQtySidebar('${p.name}', -1)" style="padding:1px 6px; font-size:10px;">-</button>
            <span>${p.qty}</span>
            <button onclick="changeQtySidebar('${p.name}', 1)" style="padding:1px 6px; font-size:10px;">+</button>
          </div>
        `}
        <span>$${Math.round(subtotal).toLocaleString('es-CL')}</span>
      </div>
    `;
    list.appendChild(div);
  });
  if (totalEl) totalEl.textContent = "$" + Math.round(total).toLocaleString('es-CL');
}

let currentActiveCategory = "herbalife";

function switchStoreTab(category) {
  currentActiveCategory = category;
  
  const btnHerbalife = document.getElementById("btn-tab-herbalife");
  const btnBelleza = document.getElementById("btn-tab-belleza");
  const infoAbono = document.getElementById("beauty-policy-block");
  
  if(category === "herbalife") {
    if(btnHerbalife) btnHerbalife.classList.add("active");
    if(btnBelleza) btnBelleza.classList.remove("active");
    if(infoAbono) infoAbono.style.display = "none";
  } else {
    if(btnHerbalife) btnHerbalife.classList.remove("active");
    if(btnBelleza) btnBelleza.classList.add("active");
    if(infoAbono) infoAbono.style.display = "block";
  }
  
  if (document.getElementById("products-catalog-grid")) {
    ejecutarRenderFiltrado();
  }
}

function ejecutarRenderFiltrado() {
  const grid = document.getElementById("products-catalog-grid");
  if (!grid) return; grid.innerHTML = "";
  const filterText = document.getElementById("search-input") ? document.getElementById("search-input").value.toLowerCase() : "";
  
  let filtered = [];
  if(currentActiveCategory === "herbalife") {
    filtered = products.filter(p => p.cat !== "belleza" && p.name.toLowerCase().includes(filterText));
  } else {
    filtered = products.filter(p => p.cat === "belleza" && p.name.toLowerCase().includes(filterText));
  }

  if (filtered.length === 0) {
    grid.innerHTML = "<p style='grid-column:1/-1; color:#aaa; font-style:italic; text-align:center;'>No se encontraron coincidencias.</p>"; return;
  }

  filtered.forEach(p => {
    const isOut = p.cat !== "belleza" && p.stock <= 0;
    const div = document.createElement("div"); div.className = `card item-node ${p.cat}`;
    const initials = p.name ? p.name.split(' ').map(w => w[0]).join('').substring(0,3).toUpperCase() : "PRD";
    const stockTag = p.cat === "belleza" ? "🟢 Disponible" : (isOut ? "🚫 SIN STOCK" : `🟢 Stock: ${p.stock} uds`);

    div.innerHTML = `
      <div onclick="window.location.href='producto.html?id=${p.id}'" style="cursor:pointer; text-align:left; flex-grow:1;">
        <div class="product-image-wrapper">
          <img src="${p.image}" alt="${p.name}" class="product-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
          <div class="product-img-placeholder" style="display:none;">${initials}</div>
        </div>
        h3 style="color:#fff; font-size:16px;">${p.name}</h3>
        <div class="stock-tag ${isOut ? 'stock-out' : 'stock-available'}" style="margin-top:4px;">${stockTag}</div>
      </div>
      <div style="margin-top:12px;">
        <p class="price" style="margin:4px 0;">$${p.price.toLocaleString('es-CL')}</p>
        <div class="qty-selector-container">
          <input type="number" id="catalog-qty-${p.id}" class="qty-input" value="1" min="1" max="10" style="width:100%; padding:10px; background:rgba(0,0,0,0.4); border:1px solid var(--border-subtle); color:white; border-radius:10px; margin-bottom:12px; text-align:center;">
        </div>
        <button onclick="const q = document.getElementById('catalog-qty-${p.id}').value; addProduct('${p.name}', ${p.price}, q);" ${isOut ? 'disabled' : ''} style="width:100%; font-size:11px; padding:10px;">${isOut ? 'Agregar' : 'Agregar'}</button>
      </div>
    `;
    grid.appendChild(div);
  });
}

function filtrarProductos() { ejecutarRenderFiltrado(); }

function renderProductDetailPage() {
  const container = document.getElementById("dynamic-product-view");
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");
  const prod = products.find(p => p.id == productId);

  if (!prod) {
    container.innerHTML = "<h3>⚠️ El producto o servicio especificado no existe.</h3>"; return;
  }

  const initials = prod.name ? prod.name.split(' ').map(w => w[0]).join('').substring(0,3).toUpperCase() : "PRD";
  const isOut = prod.cat !== "belleza" && prod.stock <= 0;

  let detailsBlock = "";
  if (prod.info) {
    detailsBlock = `
      <div style="background: rgba(229, 193, 88, 0.03); border: 1px solid rgba(229, 193, 88, 0.15); padding: 20px; border-radius: 12px; margin-bottom: 24px;">
        <h4 style="color: var(--accent-color); font-size: 14px; text-transform: uppercase; margin-bottom: 8px; letter-spacing: 0.5px;">✨ Detalles</h4>
        <p style="font-size: 14px; color: #e0e0e0; line-height: 1.6;">${prod.info}</p>
      </div>
    `;
  }

  let benefitsBlock = "";
  if (prod.beneficios) {
    benefitsBlock = `
      <div style="background: rgba(229, 193, 88, 0.03); border: 1px solid rgba(229, 193, 88, 0.15); padding: 20px; border-radius: 12px; margin-bottom: 24px;">
        <h4 style="color: var(--accent-color); font-size: 14px; text-transform: uppercase; margin-bottom: 8px; letter-spacing: 0.5px;">✨ Beneficios Exclusivos</h4>
        <p style="font-size: 13px; color: #e0e0e0; line-height: 1.6;">${prod.beneficios}</p>
      </div>
    `;
  }

  let tableBlock = "";
  if (prod.uso || prod.adv) {
    tableBlock = `
      <div class="tech-specs-box">
        <h3 style="color:var(--accent-color); font-size:14px; text-transform:uppercase; margin-bottom:12px; letter-spacing:0.5px;">📊 Ficha Técnica</h3>
        <table class="specs-table">
          <tr><td><strong>Instrucciones:</strong></td><td>${prod.uso}</td></tr>
          <tr><td><strong>Advertencias:</strong></td><td>${prod.adv}</td></tr>
        </table>
      </div>
    `;
  }

  container.innerHTML = `
    <div class="product-gallery">
      <div class="main-image-box">
        <img src="${prod.image || ''}" alt="${prod.name || ''}" style="max-width:100%; max-height:100%; object-fit:contain;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
        <div class="product-img-placeholder" style="display:none; font-size:64px;">${initials}</div>
      </div>
    </div>
    <div class="product-info-panel">
      <h1 style="font-size:32px; font-weight:700; color:#fff; margin-bottom:8px; letter-spacing:-1px;">${prod.name || ''}</h1>
      <div class="stock-tag ${isOut ? 'stock-out' : 'stock-available'}">${prod.cat === 'belleza' ? '🟢 Disponible' : (isOut ? '🚫 SIN STOCK' : `🟢 Stock: ${prod.stock} unidades`)}</div>
      <p class="price" style="font-size:32px; margin:16px 0;">$${(prod.price || 0).toLocaleString('es-CL')}</p>
      <p style="color:#fff; font-size:15px; margin-bottom:20px; line-height:1.6;">${prod.desc || ''}</p>
      
      ${detailsBlock}
      ${benefitsBlock}

      ${isOut ? '' : `
        <div style="display:flex; align-items:center; gap:16px; margin-bottom:24px;">
          <input type="number" id="detail-qty" class="qty-input" value="1" min="1" max="10" style="padding:10px; height:44px; background:rgba(0,0,0,0.4); border:1px solid var(--border-subtle); color:white; border-radius:10px; text-align:center; width:70px;">
          <button onclick="const q = document.getElementById('detail-qty').value; addProduct('${prod.name}', ${prod.price}, q);" class="btn" style="height:44px; text-transform:none;">Añadir al Carrito</button>
        </div>
      `}

      ${tableBlock}
    </div>
  `;
}

function actualizarHorarios() {
  const fechaInput = document.getElementById("fecha").value; const horaSelect = document.getElementById("hora");
  if (!fechaInput || !horaSelect) return; horaSelect.innerHTML = "";
  const diaSemana = new Date(fechaInput + "T00:00:00").getDay();
  if (diaSemana === 0) {
    let opt = document.createElement("option"); opt.value = ""; opt.textContent = "❌ Domingo: Cerrado";
    horaSelect.appendChild(opt); return;
  }
  let bloques = diaSemana === 6 
    ? ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30"]
    : ["07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"];
  bloques.forEach(b => { let opt = document.createElement("option"); opt.value = b; opt.textContent = `🕒 ${b} hrs`; horaSelect.appendChild(opt); });
}

function reservar(e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value; const telefono = document.getElementById("telefono").value.trim();
  const correo = document.getElementById("correo").value; const fecha = document.getElementById("fecha").value;
  const hora = document.getElementById("hora").value; const tipo = document.getElementById("tipo").value;
  const condicionSalud = document.getElementById("salud-condicion").value;

  if (!/^\+569\d{8}$/.test(telefono)) { alert("Teléfono debe ser +569XXXXXXXX"); return; }
  if ((new Date(`${fecha}T${hora}`) - new Date()) / (1000 * 60 * 60) < 24) { alert("Mínimo con 24 horas de anticipación."); return; }
  if (reservations.some(r => r.fecha === fecha && r.telefono === telefono)) { alert("Máximo 1 reserva diaria por número."); return; }
  if (reservations.some(r => r.fecha === fecha && r.hora === hora)) { alert("Bloque ya ocupado."); return; }

  reservations.push({ nombre, telefono, correo, fecha, hora, tipo, condicionSalud });
  localStorage.setItem("reservations", JSON.stringify(reservations));

  fetch("https://formsubmit.co/ajax/activewellness.fit@gmail.com", {
    method: "POST", headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify({ nombre, telefono, correo, fecha, hora, tipo, condicionSalud, "_subject": `Planilla Nube: Cita - ${nombre}` })
  });
  alert("Reserva registrada con éxito.");
}

function calcularCostoOportunidad() {
  const dias = parseInt(document.getElementById("op-dias").value); 
  const transporte = document.getElementById("op-transporte").value;
  const resDiv = document.getElementById("op-resultado"); 
  
  if (!dias || dias <= 0) return;
  
  if (dias > 7) {
    alert("Por lógica, los días a la semana no pueden ser mayores a 7. ¡Inténtalo de nuevo!");
    return;
  }
  
  if (!transporte) {
    alert("Por favor, seleccione un medio de transporte.");
    return;
  }

  const ahorroMonetario = (dias * 4.33) * (transporte === "auto" ? 4550 : 5000);
  const tiempoRecuperadoHoras = (dias * 4.33) * 0.75;
  resDiv.innerHTML = `
    <div style="margin-top:20px; padding:20px; background:#000; border:1px solid var(--accent-color); border-radius:10px;">
      <p style="font-size:18px; font-weight:bold; color:var(--success-color);">💰 Ahorro mensual: $${Math.round(ahorroMonetario).toLocaleString('es-CL')} líquidos</p>
      <p style="font-size:18px; font-weight:bold; color:var(--success-color);">⏱️ Tiempo recuperado: ${Math.round(tiempoRecuperadoHoras)} horas libres al mes</p>
    </div>
  `;
}

function calcularIMC() {
  const peso = parseFloat(document.getElementById("calc-peso").value); const estaturaCm = parseFloat(document.getElementById("calc-estatura").value);
  const objetivo = document.getElementById("calc-objetivo").value; const resultadoDiv = document.getElementById("calc-resultado");
  if (!peso || !estaturaCm || estaturaCm <= 0) return;
  const imc = peso / ((estaturaCm / 100) * (estaturaCm / 100));
  let calorias = Math.round(((10 * peso) + (6.25 * estaturaCm) - (5 * 23)) * 1.375);
  if (objetivo === "perder") { calorias -= 400; } else if (objetivo === "ganar") { calorias += 400; }
  let estadoUX = imc < 18.5 ? "Construcción Nutricional" : (imc < 25 ? "Vitalidad Óptima" : (imc < 30 ? "Tonificación Activa" : "Recomposición Corporal"));
  resultadoDiv.innerHTML = `
    <div style="margin-top: 20px; padding: 20px; background: #000; border: 1px solid var(--accent-color); border-radius:10px;">
      <p style="font-size:14px; margin-bottom:4px;">Fase Actual: <strong>${estadoUX}</strong></p>
      <p style="font-size: 20px; font-weight:bold; color:var(--success-color);">🎯 Consumo Recomendado: ${calorias.toLocaleString('es-CL')} kcal/día</p>
    </div>
  `;
}

function enviarAWhatsApp() {
  if (cart.length === 0) return;
  
  const tieneBelleza = cart.some(item => {
    return item.name.toLowerCase().includes("uñas") || 
           item.name.toLowerCase().includes("pestañas") || 
           item.name.toLowerCase().includes("cejas") || 
           item.name.toLowerCase().includes("esmaltado") || 
           item.name.toLowerCase().includes("retiro") || 
           item.name.toLowerCase().includes("lifting");
  });

  let mensaje = "";
  if (tieneBelleza) {
    mensaje = "¡Hola Marcela! 😊 Quiero agendar los siguientes servicios en Divinas y divas, ¿me podrías mandar los datos para realizar el abono de $5.000 por favor?\n\n";
  } else {
    mensaje = "¡Hola Marcela! 😊 Estoy cotizando estos productos, ¿me podrías mandar los datos de transferencia por favor?\n\n";
  }
  
  cart.forEach(p => { 
    mensaje += "• " + p.name + " (x" + p.qty + ")\n"; 
  });
  
  mensaje += "\n¡Muchas gracias! ✨";
  
  window.open("https://wa.me/56995496105?text=" + encodeURIComponent(mensaje), '_blank');
}
