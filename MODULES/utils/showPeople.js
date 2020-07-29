const showPeople = (people) => {
    const newPeople = people.map((person) => {
        const {name, job} = person;
        return `<p>${name} <strong>${job}</strong></p>`;
    }).join('');
    return newPeople;
};


//Only one export defaut BY file!!!!
export default showPeople;


//We can also set like this
// export default (people) => {
//     const newPeople = people.map((person) => {
//         const {name, job} = person;
//         return `<p>${name} <strong>${job}</strong></p>`;
//     }).join('');
//     return newPeople;
// };