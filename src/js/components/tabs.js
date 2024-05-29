const tabs = (tabsSelector, contentSelector, parentSelector) => {
    const tabs = document.querySelectorAll(tabsSelector),
        tabsContent = document.querySelectorAll(contentSelector),
        tabsParent = document.querySelector(parentSelector);

    let heightResult = tabsParent.clientHeight + 'px'; // объявляем переменную как let, чтобы можно было обновить ее значение

    const hideTabContent = () => {
        tabsContent.forEach(item => {
            item.classList.add('is-hide');
            item.classList.remove('is-show');
            item.style.top = heightResult;
        });

        tabs.forEach(item => {
            item.classList.remove('is-active');
        });
    }

    const showTabContent = (i = 0) => {
        tabsContent[i].classList.add('is-show');
        tabsContent[i].classList.remove('is-hide');
        tabs[i].classList.add('is-active');
    }

    const updateHeightResult = () => {
        heightResult = tabsParent.clientHeight + 'px';
        hideTabContent();
        showTabContent();
    }

    tabsParent.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.classList.contains('js-tab-link')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    hideTabContent();
    showTabContent();

    window.addEventListener('resize', updateHeightResult);
}

export default tabs;
