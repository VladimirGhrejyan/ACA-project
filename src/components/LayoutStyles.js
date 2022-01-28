const styles = {
    container: {
        display: 'grid',
        gridTemplateAreas:
        `'header header'
        'nav main'
        'footer footer'`,
        gridTemplateColumns: '1fr 4fr',
        gridTemplateRows: 'auto 1f auto',
        // gridTemplateRows: '6.5% 83.5% 10%',
        // height: '100%'
        minHeight: '100vh'
    },
    header: {
        gridArea: 'header',
        // height: '70px'
        // height: '6.5%'
    },
    nav: {
        gridArea: 'nav',
        // height: '900px'
        // height: '83.5%'
    },
    main: {
        gridArea: 'main',
        // height: '900px'
        // height: '83.5%'
    },
    footer: {
        gridArea: 'footer',
        // height: '70px'
        // height: '10%',
    }
}


export default styles;