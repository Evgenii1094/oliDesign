const customSelect = (customSelector, selectedSelector, dropdownSelector) => {
    const customSelect = document.querySelector(customSelector),
          selectedItem = customSelect.querySelector(selectedSelector),
          dropdown = customSelect.querySelector(dropdownSelector);

    customSelect.addEventListener('click', function () {
        customSelect.classList.toggle('is-open');
    });

    dropdown.addEventListener('click', function(event) {
        const targetOption = event.target.closest('.js-option');
        if (targetOption) {
            selectedItem.textContent = targetOption.textContent;
        } else {
            customSelect.classList.remove('is-open');
        }
    });

    document.addEventListener('click', function (event) {
        if (!customSelect.contains(event.target)) {
            customSelect.classList.remove('is-open');
        }
    });
};

export default customSelect;
