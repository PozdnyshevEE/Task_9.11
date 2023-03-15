const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFeMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Анастасия",
            "id_3": "Мария",
            "id_4": "Ирина",
            "id_5": "Виктория",
            "id_6": "Светлана",
            "id_7": "Валерия",
            "id_8": "Наталия",
            "id_9": "Екатерина",
            "id_10": "София"
        }
    }`,

    patronymicMaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Александрович",
            "id_2": "Максимович",
            "id_3": "Иванович",
            "id_4": "Артемович",
            "id_5": "Антонович",
            "id_6": "Никитович",
            "id_7": "Михайлович",
            "id_8": "Данилович",
            "id_9": "Егорович",
            "id_10": "Владиславович"
        }
    }`,

    professionMaleJSON: `{
        "count": 10,
        "list": {
            "id_1": "Слесарь",
            "id_2": "Электрик",
            "id_3": "Механик",
            "id_4": "Солдат",
            "id_5": "Плотник",
            "id_6": "Шахтёр",
            "id_7": "Шофёр",
            "id_8": "Комбайнёр",
            "id_9": "Трактарист",
            "id_10": "Машинист"
        }
    }`,

    professionFeMaleJSON: `{
        "count": 10,
        "list": {
            "id_1": "Повар",
            "id_2": "Врач",
            "id_3": "Швея",
            "id_4": "Бухгалтер",
            "id_5": "Продавец",
            "id_6": "Юрист",
            "id_7": "Артистка",
            "id_8": "Журналистка",
            "id_9": "Модельер",
            "id_10": "Модель"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomGender: function() {
        let result;
        const prop = this.randomIntNumber();
        (prop === 1) ? result = this.GENDER_MALE : result = this.GENDER_FEMALE;
        return result;
    },

    randomFirstName: function(arg) {
        if (arg === 'Мужчина') {
            return this.randomValue(this.firstNameMaleJson);
        }
        else {
            return this.randomValue(this.firstNameFeMaleJson);
        }
    },

    randomPatronymic: function(arg) {
        if (arg === 'Мужчина') {
            return this.randomValue(this.patronymicMaleJson);
        }
        else {
            const temp = this.randomValue(this.patronymicMaleJson);
            const result = temp.replaceAll('ич', 'на');
            return result;
        }
    },

    randomSurname: function(arg) {
        if (arg === 'Мужчина') {
            return this.randomValue(this.surnameJson);
        }
        else {
            return this.randomValue(this.surnameJson) + 'а';
        }
    },



    randomYearOfBirth: function() {
        let year = this.randomIntNumber(2023, 1950);
        let months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
        let month = this.randomIntNumber(11, 0);
        let monthStr = months[month];
        let day;
        if (months[0] || months[2] || months[4] || months[6] || months[7] || months[9] || months[11]) {
            day = this.randomIntNumber(31, 1);
        }
        else if(months[3] || months[5] || months[8] || months[10]) {
            day = this.randomIntNumber(30, 1);
        }
        else {
            day = this.randomIntNumber(28, 1);
        }

        return year + '/' + monthStr + '/' + day;
    },

    randomProfession: function(arg) {
        if (arg === 'Мужчина') {
            return this.randomValue(this.professionMaleJSON);
        }
        else {
            return this.randomValue(this.professionFeMaleJSON);
        }
    },


    getPerson: function () {
        this.person = {};
        const gen = this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName(gen);
        this.person.surname = this.randomSurname(gen);
        this.person.patronomic = this.randomPatronymic(gen);
        this.person.yearOfBirth = this.randomYearOfBirth();
        this.person.profession = this.randomProfession(gen);

        return this.person;
    }
};
