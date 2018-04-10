import { Injectable } from '@angular/core';

@Injectable()
export class TableContactCellsService {

  cells = [
    {
      nameOfAudience: 'Завідувач кафедри',
      phone: '+38 (044) 406-71-99',
      numberAudience: '3-501a',
      nameOfLecturer: 'Новаковська Ірина Олексіївна',
      personalPageLink: '/novakovska'
    },
    {
      nameOfAudience: 'Заступник завідуюча',
      phone: '+38 (044) 406-71-99',
      numberAudience: '3-501a',
      nameOfLecturer: 'Іщенко Наталія Федорівна',
      personalPageLink: '/ishchenko'
    },
    {
      nameOfAudience: 'Завідуюч лабораторії технічного забеспечення',
      phone: '+38 (044) 406-77-58',
      numberAudience: '3-523',
      nameOfLecturer: 'Остапенко Валерій Миколайович',
      personalPageLink: '/contacts'
    },
    {
      nameOfAudience: 'Комп\'ютерний клас',
      phone: '+38 (044) 406-77-58',
      numberAudience: '3-504',
      nameOfLecturer: 'Капеліста Ірина Михайлівна',
      personalPageLink: '/kapelista'
    },
    {
      nameOfAudience: 'Лабораторія геології та геоморфології',
      phone: '+38 (044) 406-77-58',
      numberAudience: '3-427',
      nameOfLecturer: 'Юдіна Наталія Єгоріна',
      personalPageLink: '/udina'
    },
    {
      nameOfAudience: 'Лабораторія геодезії',
      phone: '+38 (044) 406-77-58',
      numberAudience: '3-525',
      nameOfLecturer: 'Данкевич Анатолій Федорович',
      personalPageLink: '/danchenko'
    },
    {
      nameOfAudience: 'Викладацька',
      phone: '+38 (044) 406-77-58',
      numberAudience: '3-503',
      nameOfLecturer: 'Бабій Віталій Васильович',
      personalPageLink: '/babiy'
    },
    {
      nameOfAudience: 'Викладацька',
      phone: '+38 (044) 406-77-58',
      numberAudience: '3-523',
      nameOfLecturer: 'Андрєєва Ірина Анатоліївна',
      personalPageLink: '/contacts'
    }
  ];
}
