

export function loadYearsView() {

    const yearsSection = document.querySelector('#years');

    yearsSection.addEventListener('click', (e) => {
        if (e.target.tagName === "TD") {
            console.log(e.target.textContent);
            const currentYear = e.target.textContent.trim();
            const yearSection = document.getElementById(`year-${currentYear}`);
            yearsSection.style.display = 'none';
            yearSection.style.display = 'block';
            if (e.target.tagName === "TD") {
                const monthlySections = document.querySelectorAll('.months');
                monthlySections.addEventListener('click', (e) => {
                    const months = yearSection.querySelectorAll('div');

                    let rightIndex;

                    Array.from(months).find((singleMonth, index) => {

                        if (singleMonth.textContent.trim() === e.target.firstChild.textContent.trim()){
                            rightIndex = index;
                             
                        }
                    });
                });
            }

        }
    });
}

export function loadMonthlyViews() {

}