// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="Inicio.html"><strong aria-hidden="true">1.</strong> Inicio</a></li><li class="chapter-item expanded "><a href="cronograma.html"><strong aria-hidden="true">2.</strong> Cronograma</a></li><li class="chapter-item expanded "><a href="clases.html"><strong aria-hidden="true">3.</strong> Clases</a></li><li class="chapter-item expanded "><a href="2025_2C.html"><strong aria-hidden="true">4.</strong> 2do Cuatrimestre 2025</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="2025_2C_tp1.html"><strong aria-hidden="true">4.1.</strong> Trabajo Práctico 1</a></li></ol></li><li class="chapter-item expanded "><a href="2025_1C.html"><strong aria-hidden="true">5.</strong> 1er Cuatrimestre 2025</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="2025_1C_tp1.html"><strong aria-hidden="true">5.1.</strong> Trabajo Práctico 1</a></li><li class="chapter-item expanded "><a href="2025_1C_tp2.html"><strong aria-hidden="true">5.2.</strong> Trabajo Práctico 2</a></li></ol></li><li class="chapter-item expanded "><a href="2024_2C.html"><strong aria-hidden="true">6.</strong> 2do Cuatrimestre 2024</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="2024_2C_tp1.html"><strong aria-hidden="true">6.1.</strong> Trabajo Práctico 1</a></li><li class="chapter-item expanded "><a href="2024_2C_tp2.html"><strong aria-hidden="true">6.2.</strong> Trabajo Práctico 2</a></li></ol></li><li class="chapter-item expanded "><a href="2024_1C.html"><strong aria-hidden="true">7.</strong> 1er Cuatrimestre 2024</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="2024_1C_tp1.html"><strong aria-hidden="true">7.1.</strong> Trabajo Práctico 1</a></li><li class="chapter-item expanded "><a href="2024_1C_tp2.html"><strong aria-hidden="true">7.2.</strong> Trabajo Práctico 2</a></li></ol></li><li class="chapter-item expanded "><a href="2C2023.html"><strong aria-hidden="true">8.</strong> 2do Cuatrimestre 2023</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="2C2023_tp.html"><strong aria-hidden="true">8.1.</strong> Trabajo Práctico</a></li></ol></li><li class="chapter-item expanded "><a href="1C2023.html"><strong aria-hidden="true">9.</strong> 1er Cuatrimestre 2023</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="1C2023_tp1.html"><strong aria-hidden="true">9.1.</strong> Trabajo Práctico 1</a></li><li class="chapter-item expanded "><a href="1C2023_tp2.html"><strong aria-hidden="true">9.2.</strong> Trabajo Práctico 2</a></li></ol></li><li class="chapter-item expanded "><a href="2C2022.html"><strong aria-hidden="true">10.</strong> 2do Cuatrimestre 2022</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="2C2022_tp1.html"><strong aria-hidden="true">10.1.</strong> Trabajo Práctico 1</a></li><li class="chapter-item expanded "><a href="2C2022_tp2.html"><strong aria-hidden="true">10.2.</strong> Trabajo Práctico 2</a></li></ol></li><li class="chapter-item expanded "><a href="1C2022.html"><strong aria-hidden="true">11.</strong> 1er Cuatrimestre 2022</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="1C2022_tp.html"><strong aria-hidden="true">11.1.</strong> Trabajo Práctico</a></li><li class="chapter-item expanded "><a href="finales_2022_jul.html"><strong aria-hidden="true">11.2.</strong> Finales Julio/Agosto 2022</a></li></ol></li><li class="chapter-item expanded "><a href="2C2021.html"><strong aria-hidden="true">12.</strong> 2do Cuatrimestre 2021</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="2C2021_tp.html"><strong aria-hidden="true">12.1.</strong> Trabajo Práctico 1</a></li><li class="chapter-item expanded "><a href="2C2021_tp2.html"><strong aria-hidden="true">12.2.</strong> Trabajo Práctico 2</a></li><li class="chapter-item expanded "><a href="finales_2022_feb.html"><strong aria-hidden="true">12.3.</strong> Finales Febrero/Marzo 2022</a></li></ol></li><li class="chapter-item expanded "><a href="1C2021.html"><strong aria-hidden="true">13.</strong> 1er Cuatrimestre 2021</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="trabajos_practicos_1.html"><strong aria-hidden="true">13.1.</strong> Trabajo Práctico 1</a></li><li class="chapter-item expanded "><a href="trabajos_practicos_2.html"><strong aria-hidden="true">13.2.</strong> Trabajo Práctico 2</a></li><li class="chapter-item expanded "><a href="trabajos_practicos_3.html"><strong aria-hidden="true">13.3.</strong> Trabajo Práctico 3</a></li><li class="chapter-item expanded "><a href="papers_final.html"><strong aria-hidden="true">13.4.</strong> Examen Final - Instrucciones y papers</a></li></ol></li><li class="chapter-item expanded "><a href="material_adicional.html"><strong aria-hidden="true">14.</strong> Material Adicional</a></li><li class="chapter-item expanded "><a href="bibliografia.html"><strong aria-hidden="true">15.</strong> Bibliografia</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
