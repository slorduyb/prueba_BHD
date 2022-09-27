

const mainItems = [
    {
        title: 'Tarjeta de Claves Digital',
        subtitle: 'Consulta tus codigos de autenticacion',
        icon: '/assets/icon/icon_invoke_tdc.svg',
        name:false
    },
    {
        title: 'Configuracion de acceso',
        subtitle: 'Inicia con huella,Face ID, PIN o Patron',
        icon: '/assets/icon/icon_access_config.svg',
        name:false
    },
    {
        title: 'Configuracion de seguridad',
        subtitle: 'Clave de acceso y proteccion transaccional',
        icon: '/assets/icon/icon_config_security.svg',
        name:false
    },
    {
        title: 'Editar Resumen',
        subtitle: 'Ordena tus productos o agrega un alias',
        icon: '/assets/icon/logo_edit_summary.svg',
        name:false
    },
    {
        title: 'Editar consulta rapida',
        subtitle: 'Consulta tus productos sin iniciar sesion',
        icon: '/assets/icon/icon_quick_reference.svg',
        name:false
    },
    {
        title: 'Ajustes generales',
        subtitle: 'Personaliza tu aplicacion',
        icon: "options-outline",
        name:true
    },
]

const otherItems = [
    {
        title: 'Divisas',
        subtitle: 'Tasas de cambio y calculadora',
        icon: '/assets/icon/icon_exchange.svg',
        name:false
    },
    {
        title: 'Localizaciones',
        subtitle: 'Ubica cajeros, sucursales y subagentes',
        icon: 'location-outline',
        name:true
    },
    {
        title: 'Contactos',
        subtitle: '¿Necesitas comunicarte con nosotros ?',
        icon: '/assets/icon/icon_contact.svg',
        name:false
    },
]

const menuItems = {mainItems,otherItems} 

export default menuItems