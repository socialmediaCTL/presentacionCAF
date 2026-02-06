import voltComercializadoras from '../assets/volt_comercializadoras.jpg';
import slide2WatchGears from '../assets/slide2_watch_gears.png';
import slide5Balance from '../assets/slide5_balance.png';
import voltAuditoria from '../assets/volt_auditoria.png';
import voltAutomatizacion from '../assets/volt_automatizacion.jpg';
import crmLaptopUser from '../assets/crm_laptop_user.jpg';
import voltOficina from '../assets/volt_oficina.jpg';
import voltFamilia from '../assets/volt_familia.png';
import voltMadrid from '../assets/volt_madrid.png';
import logoComparamos from '../assets/logo_comparamos.png';

export const logo = logoComparamos;

export const slidesData = [
    {
        id: 1,
        type: 'portada',
        title: 'EXCELENCIA EN LA',
        highlight: 'GESTIÓN ENERGÉTICA',
        subtitle: 'EL PARTNER ESTRATÉGICO DEL ADMINISTRADOR DE FINCAS',
        videoBtn: true,
    },
    {
        id: 2,
        title: 'ALTA',
        highlight: 'VOLATILIDAD',
        text: 'El mercado energético cambia constantemente. El administrador tiene hoy la llave para transformar un gasto inevitable en un ahorro planificado.',
        image: voltComercializadoras,
        overlay: 'dark',
    },
    {
        id: 3,
        title: 'EL FRENO A SU',
        highlight: 'CRECIMIENTO',
        text: 'La gestión manual y el trato con call centers limitan su potencial. Nuestra misión es potenciar su labor eliminando lo tedioso.',
        image: slide2WatchGears,
        overlay: 'dark',
    },
    {
        id: 4,
        title: 'INTERESES',
        highlight: 'ALINEADOS',
        text: 'La comercializadora busca su margen; nosotros somos su escudo técnico independiente que garantiza neutralidad total.',
        image: slide5Balance,
        overlay: 'standard',
    },
    {
        id: 5,
        type: 'counter',
        subtitle: 'AHORRO INVISIBLE',
        text: 'Más del 40% de las comunidades paga por potencia no utilizada. Es un ahorro neto que ya existe y que nosotros activamos.',
        image: voltAuditoria,
        targetValue: 40,
    },
    {
        id: 6,
        title: 'ESCALABILIDAD',
        highlight: 'PURA',
        text: 'Nuestro motor de IA audita el mercado en tiempo real, permitiendo ofrecer auditorías de primer nivel a toda su cartera sin esfuerzo extra.',
        image: voltAutomatizacion,
        overlay: 'dark',
    },
    {
        id: 7,
        title: 'CONTROL',
        highlight: 'TOTAL',
        text: 'A través de nuestro CRM, recuperan el control total con alertas automáticas y monitorización constante en un solo dashboard.',
        image: crmLaptopUser,
        overlay: 'standard',
    },
    {
        id: 8,
        title: 'TRANSPARENCIA',
        highlight: 'TOTAL',
        text: 'Facilitamos la toma de decisiones con informes visuales claros, eliminando dudas y fortaleciendo su autoridad ante los vecinos.',
        image: voltOficina,
        overlay: 'standard',
    },
    {
        id: 9,
        title: 'SIN COSTES',
        highlight: 'SIN COMPROMISO',
        text: 'Un modelo donde todos ganan: el vecino ahorra, el administrador profesionaliza su gestión. Todo con un coste real de 0€.',
        image: voltFamilia,
        overlay: 'standard',
    },
    {
        id: 10,
        type: 'roadmap',
        title: 'PRÓXIMOS',
        highlight: 'PASOS',
        image: voltMadrid,
        steps: [
            { number: 1, title: 'Convenio', desc: 'Formalización de colaboración estratégica.' },
            { number: 2, title: 'Auditoría', desc: 'Análisis técnico completo de la cartera.' },
            { number: 3, title: 'Propuesta', desc: 'Presentación de soluciones personalizadas.' },
            { number: 4, title: 'Ahorro', desc: 'Activación de ahorros y resultados garantizados.' }
        ],
        url: 'www.comparamostuluz.es'
    }
];

export const narratorScripts = [
    "Buenos días. Soy Ismael Rivademar, CEO de Comparamos Tu Luz. Hoy presentamos una infraestructura diseñada para que el administrador sea el estratega que su comunidad necesita, liderando con datos y soluciones claras.",
    "Donde otros ven volatilidad, nosotros vemos oportunidad. El administrador tiene hoy la llave para transformar un gasto inevitable en un ahorro planificado para sus comunidades.",
    "Ustedes gestionan el motor de Madrid. Nuestra misión es potenciar esa labor, eliminando el trato tedioso con call centers para que su equipo se centre en el crecimiento del despacho.",
    "Actuamos como su escudo técnico, eliminando cláusulas abusivas. Somos una plataforma independiente que garantiza neutralidad total, alineada exclusivamente con el presupuesto de sus comunidades.",
    "Revelamos un valor oculto: más del 40% de las comunidades paga por potencia no utilizada. Es un ahorro neto que ya existe en sus carteras y que nosotros activamos de forma inmediata.",
    "Nuestro motor de IA audita el mercado en tiempo real. Esto permite que su despacho ofrezca una auditoría técnica de primer nivel a toda su cartera con el mismo esfuerzo que antes dedicaba a una sola comunidad.",
    "A través de nuestro CRM, recuperan el control total. Dispondrán de alertas de vencimiento automáticas y monitorización constante de cada punto de suministro en un solo dashboard.",
    "Facilitamos la toma de decisiones con informes visuales claros. Al presentar ahorros garantizados con este rigor técnico, eliminamos dudas y fortalecemos su autoridad ante los vecinos.",
    "Es un modelo donde todos ganan: el vecino ahorra, el administrador profesionaliza su gestión y el Colegio genera recursos para su crecimiento institucional. Todo con un coste real de 0€.",
    "Patinamos hacia donde el disco va a estar. El futuro es digital, automático y transparente. En Comparamos Tu Luz, estamos listos para ser su motor de cambio. Muchas gracias."
];
