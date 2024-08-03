import { Router } from "./router.js";

        const router = new Router();
        router.add('/', './pages/home.html');
        router.add('/explore', './pages/explorer.html');
        router.add('/about', './pages/about.html');
        router.add(404, './pages/404.html');

        function updateActiveLink(event) {
            document.querySelectorAll('.navbar a').forEach(link => link.classList.remove('active'));
            if (event) {
                event.target.classList.add('active');
            } else {
                const activeLink = document.querySelector(`.navbar a[href='${window.location.pathname}']`);
                if (activeLink) activeLink.classList.add('active');
            }
        }

        function handleRoute(event) {
            if (event) event.preventDefault();
            router.route(event);
            updateActiveLink(event);
        }

        router.handle();
        window.onpopstate = () => {
            router.handle();
            updateActiveLink();
        };
        window.route = handleRoute;

        updateActiveLink();