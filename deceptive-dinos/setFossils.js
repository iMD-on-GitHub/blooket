(async () => {
    let n = document.createElement('iframe');
    document.body.append(n);
    window.alert = n.contentWindow.alert.bind(window);
    window.prompt = n.contentWindow.prompt.bind(window);
    window.confirm = n.contentWindow.confirm.bind(window);
    n.remove();
                function reactHandler() {
                    return Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
                };

                let fossils = Number(parseFloat(prompt('How many fossils do you want?')));
                reactHandler().stateNode.setState({ fossils: fossils });

                alert('Fossils added!');
            } catch (e) {
                if (confirm('Game error occured please report to discord server as soon as possible')) {
                    window.open('https://discord.gg/Nj9Zs5VtFp');
                };
            };
})();


function footer() {
    let element = document.createElement('div');

    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    element.onmousedown = ((e = window.event) => {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = (() => {
            document.onmouseup = null;
            document.onmousemove = null;
        });
        document.onmousemove = ((e) => {
            e = e || window.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            let top = (element.offsetTop - pos2) > 0 ? (element.offsetTop - pos2) : 0;
            let left = (element.offsetLeft - pos1) > 0 ? (element.offsetLeft - pos1) : 0;
            element.style.top = top + "px";
            element.style.left = left + "px";
        });
    });
};

footer();
