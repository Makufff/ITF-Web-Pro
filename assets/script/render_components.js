(async () => {
    const components = [
        'Navbar',
        'Home',
        'Aboutme',
        'Certificate',
        'Activity',
        'Projects',
        'Footer',
    ];
const path_components = './assets/components';
    for (const name of components) {
        const response = await fetch(`${path_components}/${name}.html`);
        const data = await response.text()
        const documents = document.querySelector(name);
        if (documents) documents.innerHTML = data;
    }
    const scripts = [
        "Navbar",
        "Hello_day"
    ];
const script_components = './assets/script';
    for (const name of scripts) {
        let e = document.createElement("script");
        e.src = `${script_components}/${name}.js`;
        e.defer = true;
        document.head.append(e);
    }
})();