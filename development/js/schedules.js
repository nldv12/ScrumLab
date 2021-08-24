for (let i = 0; i < JSON.parse(localStorage.getItem('plans')).length; i++) {
    console.log(JSON.parse(localStorage.getItem('plans'))[i].id);
    console.log(JSON.parse(localStorage.getItem('plans'))[i].name);
    console.log(JSON.parse(localStorage.getItem('plans'))[i].description);
    console.log(JSON.parse(localStorage.getItem('plans'))[i].weekNumber);
}

const scheduleTbody = document.querySelector(".schedules__table-tbody");

JSON.parse(localStorage.getItem('plans')).forEach(plan => {
    const scheduleTr = document.createElement("tr");
    scheduleTr.innerHTML = `<td class="schedules__table-id">${plan.id}</td>
                            <td class="schedules__table-name">${plan.name}</td>
                            <td class="schedules__table-description">${plan.description}</td>
                            <td class="schedules__table-week">${plan.weekNumber}</td>
                            <td class="schedules__table-action">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                             stroke="#FFB03B" fill="#FFB03B">
                                            <path d="M18 14.45v6.55h-16v-12h6.743l1.978-2h-10.721v16h20v-10.573l-2 2.023zm1.473-10.615l1.707 1.707-9.281 9.378-2.23.472.512-2.169 9.292-9.388zm-.008-2.835l-11.104 11.216-1.361 5.784 5.898-1.248 11.103-11.218-4.536-4.534z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                             stroke="#BD4932" fill="#BD4932">
                                            <path d="M9 19c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5-17v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712zm-3 4v16h-14v-16h-2v18h18v-18h-2z"/>
                                        </svg>
                             </td>`;
    scheduleTbody.append(scheduleTr);
})