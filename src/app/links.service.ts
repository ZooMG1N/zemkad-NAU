import { Injectable } from '@angular/core';

@Injectable()
export class LinksService {
  links = [
    {
      link: '/',
      name: 'Головна'
    },
    {
      link: '/history',
      name: 'Історія кафедри'
    },
    {
      link: '/',
      name: 'Співробітництво кафедри!'
    },
    {
      link: '/collective',
      name: 'Колектив кафедри'
    },
    {
      link: '/contacts',
      name: 'Контакти кафедри'
    },
    {
      link: '/',
      name: 'Наукова робота!'
    },
    {
      link: '/',
      name: 'Положення про кафедру!'
    },
    {
      link: '/',
      name: 'Умови вступу!'
    },
    {
      link: '/social-network',
      name: 'Ми в соціальних мережах'
    }
  ];
}
