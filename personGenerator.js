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
        prop ? result = this.GENDER_MALE : result = this.GENDER_FEMALE;
        return result;
    },

    randomFirstName: function() {
        if (this.randomGender() === 'Мужчина') {
            return this.randomValue(this.firstNameMaleJson);
        }
        else {
            return this.randomValue(this.firstNameFeMaleJson);
        }
    },


    randomSurname: function() {
        if (this.randomGender() === 'Мужчина') {
            return this.randomValue(this.surnameJson);
        }
        else {
            return this.randomValue(this.surnameJson) + 'а';
        }
    },


    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();

        return this.person;
    }
};
