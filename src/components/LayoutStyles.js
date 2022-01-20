const styles = {
    container: {
        display: 'grid',
        gridTemplateAreas:
        `'header header'
        'nav main'
        'footer footer'`,
        gridTemplateColumns: '1fr 4fr',
    },
    header: {
        gridArea: 'header',
        height: '70px'
    },
    nav: {
        gridArea: 'nav'
    },
    main: {
        gridArea: 'main'
    },
    footer: {
        gridArea: 'footer'
    }
}

export default styles;