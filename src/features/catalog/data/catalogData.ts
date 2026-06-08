import {
  BadgeCheck,
  Bluetooth,
  Car,
  CarFront,
  CircuitBoard,
  Headphones,
  MonitorSmartphone,
  PackageCheck,
  Radio,
  ShieldCheck,
  Sparkles,
  Wrench,
} from 'lucide-react';
import type {
  Category,
  FAQItem,
  FeaturedItem,
  NavigationItem,
  Product,
  Review,
} from '../types/catalog.types';

export const navigationItems: NavigationItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Reproductores', href: '#reproductores' },
  { label: 'Marcos Adaptadores', href: '#marcos' },
  { label: 'Accesorios', href: '#accesorios' },
  { label: 'Contacto', href: '#contacto' },
];

export const heroHighlights = [
  { icon: MonitorSmartphone, label: 'Android 15' },
  { icon: Bluetooth, label: 'CarPlay y Bluetooth' },
  { icon: ShieldCheck, label: 'Canbus y cablería' },
];

export const categories: Category[] = [
  {
    id: 'pantallas',
    title: 'Pantallas y Reproductores',
    description: 'Equipos Android y convencionales con Bluetooth, USB, CarPlay y cámara de retroceso.',
    icon: Radio,
  },
  {
    id: 'marcos',
    title: 'Marcos Integrales',
    description: 'Adaptadores para Toyota, Chevrolet, Hyundai, Jeep, Honda, Nissan, Mitsubishi y más.',
    icon: CarFront,
  },
  {
    id: 'accesorios',
    title: 'Accesorios Automotrices',
    description: 'Spoilers, aletas, porta placas, luces, cámaras, remolques y detalles de personalización.',
    icon: Sparkles,
  },
];

export const compatibilityModules = [
  {
    title: 'Pantalla',
    subtitle: 'Android, 1 DIN o 2 DIN',
    icon: MonitorSmartphone,
  },
  {
    title: 'Marco',
    subtitle: 'Medida y tablero',
    icon: CarFront,
  },
  {
    title: 'Cablería',
    subtitle: 'Arnés y Canbus',
    icon: CircuitBoard,
  },
  {
    title: 'Accesorio',
    subtitle: 'Exterior e iluminación',
    icon: Sparkles,
  },
];

export const compatibilityKpis = [
  {
    label: 'Marcas cubiertas',
    value: '9+',
    detail: 'Toyota, Chevrolet, Hyundai y más',
  },
  {
    label: 'Rango de pantallas',
    value: '7" - 10.1"',
    detail: 'Android y convencionales',
  },
  {
    label: 'Cotización guiada',
    value: '3 pasos',
    detail: 'Vehículo, tablero y producto',
  },
];

export const compatibilityFlow = [
  { label: 'Datos', value: 100 },
  { label: 'Tablero', value: 84 },
  { label: 'Canbus', value: 68 },
  { label: 'Pedido', value: 92 },
];

export const compatibilityChecks = [
  'Marca, modelo y año del vehículo',
  'Formato de pantalla y marco requerido',
  'Cablería, Canbus y cámara compatibles',
];

export const products: Product[] = [
  {
    id: 'android-9-2din',
    name: 'Reproductor 9" 2 DIN Android 15',
    category: 'Reproductores Android',
    description: 'Equipo 4+64 GB con CarPlay, Bluetooth, USB y cámara de retroceso para una experiencia multimedia completa.',
    badge: 'Más solicitado',
    image: {
      webp: '/assets/products/android-9-2din.webp',
      fallback: '/assets/products/android-9-2din.jpg',
      alt: 'Reproductor Android 9 pulgadas 2 DIN Super Smart con accesorios',
    },
    specs: ['4+64 GB', 'Android 15', 'CarPlay y Android Auto', 'Cámara de retroceso AHD'],
  },
  {
    id: 'radio-1din',
    name: 'Reproductor Sencillo 1 DIN',
    category: 'Audio convencional',
    description: 'Radio compacta compatible con Bluetooth, USB y memoria Micro SD, ideal para actualizaciones rápidas.',
    image: {
      webp: '/assets/products/radio-1din.webp',
      fallback: '/assets/products/radio-1din.jpg',
      alt: 'Reproductor sencillo 1 DIN con control remoto',
    },
    specs: ['Bluetooth', 'USB', 'Micro SD', 'Control estándar'],
  },
  {
    id: 'marco-4runner',
    name: 'Marco Integral Toyota 4Runner',
    category: 'Marcos Integrales',
    description: 'Marco para Toyota 4Runner 2012-2024 con cablería y Canbus para instalación más limpia.',
    badge: 'Toyota',
    image: {
      webp: '/assets/products/marco-toyota-4runner.webp',
      fallback: '/assets/products/marco-toyota-4runner.jpg',
      alt: 'Marco integral para Toyota 4Runner 2012 a 2024',
    },
    specs: ['2012-2024', '9 pulgadas', 'Canbus incluido', 'Cablería incluida'],
  },
  {
    id: 'spoiler-maletero',
    name: 'Spoiler de Maletero',
    category: 'Accesorios',
    description: 'Detalle exterior flexible para maletero, disponible en acabado negro mate y fibra de carbono.',
    image: {
      webp: '/assets/products/spoiler-maletero.webp',
      fallback: '/assets/products/spoiler-maletero.jpg',
      alt: 'Spoiler flexible de maletero en color negro',
    },
    specs: ['Negro mate', 'Fibra de carbono', '2.5 mts', 'Instalación adhesiva'],
  },
  {
    id: 'aleta-tiburon',
    name: 'Aleta de Tiburón',
    category: 'Accesorios exteriores',
    description: 'Antena decorativa con acabados para mejorar la línea visual del vehículo.',
    image: {
      webp: '/assets/products/aleta-tiburon.webp',
      fallback: '/assets/products/aleta-tiburon.jpg',
      alt: 'Aletas de tiburón automotrices de varios colores',
    },
    specs: ['Negro mate', 'Negro brillante', 'Fibra de carbono', 'Función de radio'],
  },
  {
    id: 'luces-parrilla',
    name: 'Luces de Parrilla Toyota',
    category: 'Iluminación',
    description: 'Set de luces ámbar para parrilla con presencia deportiva y mejor visibilidad frontal.',
    image: {
      webp: '/assets/products/luces-parrilla-toyota.webp',
      fallback: '/assets/products/luces-parrilla-toyota.jpg',
      alt: 'Luces de parrilla ámbar instaladas en camioneta Toyota',
    },
    specs: ['Ámbar', 'Parrilla frontal', 'Set de luces', 'Estilo deportivo'],
  },
  {
    id: 'camara-retroceso',
    name: 'Cámaras de Retroceso',
    category: 'Seguridad',
    description: 'Opciones cuadradas, domo tipo Toyota y porta placas con cámara para asistencia al estacionar.',
    image: {
      webp: '/assets/products/camara-retroceso.webp',
      fallback: '/assets/products/camara-retroceso.jpg',
      alt: 'Cámaras de retroceso automotrices sobre mesa de trabajo',
    },
    specs: ['Cuadrada HD', 'Domo Toyota', 'Porta placas', 'Sistema 360'],
  },
  {
    id: 'porta-placa-toyota',
    name: 'Porta Placas Decorativo',
    category: 'Personalización',
    description: 'Marco porta placa con diseño Toyota para dar un acabado más limpio al exterior.',
    image: {
      webp: '/assets/products/porta-placa-toyota.webp',
      fallback: '/assets/products/porta-placa-toyota.jpg',
      alt: 'Porta placa decorativo Toyota',
    },
    specs: ['Toyota', 'TRD', 'Chevrolet', 'JDM'],
  },
  {
    id: 'porta-placa-trd',
    name: 'Porta Placas TRD',
    category: 'Personalización',
    description: 'Versión decorativa TRD para dar una terminación más deportiva y limpia al frente o maletero.',
    image: {
      webp: '/assets/products/porta-placa-trd.webp',
      fallback: '/assets/products/porta-placa-trd.jpg',
      alt: 'Porta placa TRD decorativo para vehículo',
    },
    specs: ['TRD', 'Negro mate', 'Exterior', 'Fácil montaje'],
  },
  {
    id: 'porta-placa-chevrolet',
    name: 'Porta Placas Chevrolet',
    category: 'Personalización',
    description: 'Marco decorativo con identidad Chevrolet para mejorar la presencia visual del vehículo.',
    image: {
      webp: '/assets/products/porta-placa-chevrolet.webp',
      fallback: '/assets/products/porta-placa-chevrolet.jpg',
      alt: 'Porta placa Chevrolet decorativo',
    },
    specs: ['Chevrolet', 'Negro brillante', 'Exterior', 'Acabado limpio'],
  },
  {
    id: 'aros-remolque',
    name: 'Aros de Remolque',
    category: 'Exterior deportivo',
    description: 'Aros decorativos y funcionales para dar una línea más agresiva al frente o la parte trasera.',
    image: {
      webp: '/assets/products/aros-remolque.webp',
      fallback: '/assets/products/aros-remolque.jpg',
      alt: 'Aros de remolque automotrices de colores',
    },
    specs: ['Rojo', 'Azul', 'JDM', 'Exterior'],
  },
  {
    id: 'resortes-maletero',
    name: 'Resortes de Maletero',
    category: 'Accesorios exteriores',
    description: 'Kit para apertura asistida de maletero, pensado para mejorar comodidad y respuesta diaria.',
    image: {
      webp: '/assets/products/resortes-maletero.webp',
      fallback: '/assets/products/resortes-maletero.jpg',
      alt: 'Resortes para apertura asistida de maletero',
    },
    specs: ['Apertura asistida', 'Kit', 'Instalación rápida', 'Uso diario'],
  },
];

export const featuredItems: FeaturedItem[] = [
  {
    id: 'kit-android',
    eyebrow: 'Multimedia',
    title: 'Kit Android con cámara y antenas',
    description: 'Paquete con pantalla, arnés RCA, antena GPS, antena WiFi y cámara para una instalación completa.',
    image: {
      webp: '/assets/products/android-9-product-kit.webp',
      fallback: '/assets/products/android-9-product-kit.jpg',
      alt: 'Kit de reproductor Android Super Smart con cables y cámara',
    },
  },
  {
    id: 'aletas',
    eyebrow: 'Exterior',
    title: 'Aletas de tiburón',
    description: 'Modelos grandes y pequeños en negro mate, negro brillante y fibra de carbono.',
    image: {
      webp: '/assets/products/aleta-tiburon.webp',
      fallback: '/assets/products/aleta-tiburon.jpg',
      alt: 'Aletas de tiburón automotrices de varios colores',
    },
  },
  {
    id: 'luces-parrilla',
    eyebrow: 'Iluminación',
    title: 'Luces de parrilla tipo Toyota',
    description: 'Luces ámbar para parrilla con presencia deportiva y mejor visibilidad frontal.',
    image: {
      webp: '/assets/products/luces-parrilla-toyota.webp',
      fallback: '/assets/products/luces-parrilla-toyota.jpg',
      alt: 'Luces de parrilla ámbar instaladas en camioneta Toyota',
    },
  },
  {
    id: 'camara',
    eyebrow: 'Seguridad',
    title: 'Cámaras de retroceso',
    description: 'Opciones cuadradas, domo tipo Toyota, porta placas con cámara y sistemas 360 grados.',
    image: {
      webp: '/assets/products/camara-retroceso.webp',
      fallback: '/assets/products/camara-retroceso.jpg',
      alt: 'Cámaras de retroceso automotrices sobre mesa de trabajo',
    },
  },
  {
    id: 'porta-placas',
    eyebrow: 'Personalización',
    title: 'Porta placas decorativos',
    description: 'Modelos Toyota, TRD, Chevrolet, Nissan, Nismo, JDM, HKS y otros acabados.',
    image: {
      webp: '/assets/products/porta-placa-toyota.webp',
      fallback: '/assets/products/porta-placa-toyota.jpg',
      alt: 'Porta placa decorativo Toyota',
    },
  },
];

export const advantages = [
  {
    icon: PackageCheck,
    title: 'Instalación más simple',
    description: 'Marcos seleccionados con cablería y Canbus incluidos para reducir adaptaciones.',
  },
  {
    icon: Car,
    title: 'Variedad por marca',
    description: 'Disponibilidad para Toyota, Chevrolet, Hyundai, Jeep, Honda, Nissan, Mitsubishi, Mazda y más.',
  },
  {
    icon: Headphones,
    title: 'Atención personalizada',
    description: 'Cotización por WhatsApp según modelo de vehículo, pantalla deseada y tipo de accesorio.',
  },
  {
    icon: CircuitBoard,
    title: 'Catálogo técnico',
    description: 'Productos con especificaciones claras para comparar memoria, conectividad, medidas y compatibilidad.',
  },
];

export const reviews: Review[] = [
  {
    name: 'Cliente Toyota',
    vehicle: '4Runner',
    text: 'Me orientaron con el marco correcto y el equipo Android quedó integrado sin improvisar piezas.',
  },
  {
    name: 'Cliente Chevrolet',
    vehicle: 'Aveo',
    text: 'La cotización fue rápida, con opciones claras para pantalla, cablería y accesorios exteriores.',
  },
  {
    name: 'Cliente Hyundai',
    vehicle: 'Tucson',
    text: 'Consiguieron el accesorio que buscaba y me explicaron diferencias de modelo antes de comprar.',
  },
];

export const faqs: FAQItem[] = [
  {
    question: '¿Cómo confirmo compatibilidad con mi vehículo?',
    answer:
      'Envía marca, modelo, año y foto del tablero por WhatsApp. Con eso se valida pantalla, marco, cablería y si requiere Canbus.',
  },
  {
    question: '¿Cómo confirmo disponibilidad?',
    answer:
      'La disponibilidad se confirma por WhatsApp según el producto, la marca del vehículo y el catálogo vigente.',
  },
  {
    question: '¿Los reproductores Android incluyen cámara?',
    answer:
      'Los equipos Android del catálogo incluyen cámara de retroceso, antena GPS, antena WiFi, arnés RCA/Subwoofer y Fancooler según modelo.',
  },
  {
    question: '¿Puedo descargar el catálogo?',
    answer:
      'Sí. La web incluye acceso directo al catálogo de accesorios, lista de reproductores y lista de marcos para revisar modelos.',
  },
  {
    question: '¿Manejan accesorios además de reproductores?',
    answer:
      'Sí. Hay spoilers, aletas de tiburón, porta placas, luces, cámaras, resortes de maletero, aros de remolque y piezas 3D.',
  },
];

export const catalogLinks = [
  {
    label: 'Catálogo de accesorios',
    href: '/assets/catalogs/catalogo-super-smart.pdf',
  },
  {
    label: 'Lista de reproductores',
    href: '/assets/catalogs/lista-reproductores-super-smart.pdf',
  },
  {
    label: 'Lista de marcos',
    href: '/assets/catalogs/lista-marcos-super-smart.pdf',
  },
];

export const productCategoryAnchors = {
  reproductores: 'reproductores',
  marcos: 'marcos',
  accesorios: 'accesorios',
};

export const trustBadges = [
  { icon: BadgeCheck, text: 'Catálogo real' },
  { icon: Wrench, text: 'Compatibilidad guiada' },
  { icon: ShieldCheck, text: 'Compra asesorada' },
];
