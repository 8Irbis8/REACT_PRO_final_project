# Итоговый проект React PRO

## Запуск проекта локально:

- `npm i` - установка зависимостей
- `npm run start` - запуск проекта
- `npm run build` - запуск сборки

## Цель 1: Сборка на Vite+SWC

### Проделано:

- [x] Миграция с Webpack на Vite
- [x] Настройка ESLint с резолвером алиасов
- [x] Обновление до React 19
- [x] Настройка SWC компилятора вместо Babel
- [x] CSS модули с кастомными именами классов
- [x] Code splitting и tree shaking
- [x] Раздельные конфиги для dev/prod сборок
- [x] Оптимизация зависимостей (pre-bundling)
- [x] Source maps для разработки и продакшена
- [x] Минификация через esbuild

### Было/Стало:

## Webpack

-- build time 18.34s
-- output-size 683Kb

## Vite + SWC

-- build time 6.62s
-- output-size 663Kb

## Цель 2: FSD

### Структура проекта
```bash
├───src
│ ├───app
│ │ └───styles
│ ├───entities
│ │ ├───counter
│ │ │ ├───cartCounter  
│ │ │ │ ├───model  
│ │ │ │ │ └───hooks
│ │ │ │ └───ui
│ │ │ └───productCartCounter
│ │ │ ├───model
│ │ │ │ └───hooks
│ │ │ └───ui
│ │ ├───filter
│ │ │ └───ui
│ │ ├───product
│ │ │ ├───Card
│ │ │ │ └───ui
│ │ │ ├───DeliveryInfo
│ │ │ │ └───ui
│ │ │ ├───Description
│ │ │ │ └───ui
│ │ │ ├───Header
│ │ │ │ └───ui
│ │ │ ├───LikeButton
│ │ │ │ ├───model
│ │ │ │ │ └───hooks
│ │ │ │ └───ui
│ │ │ └───MainInfo
│ │ │ └───ui
│ │ └───search
│ │ ├───model
│ │ │ └───hooks
│ │ └───ui
│ ├───features
│ │ ├───cart
│ │ │ ├───CartAmount
│ │ │ │ └───ui
│ │ │ └───CartItem
│ │ │ └───ui
│ │ └───infinite-scroll
│ │ ├───model
│ │ │ └───hooks
│ │ └───ui
│ ├───pages
│ │ ├───CartPage
│ │ │ └───ui
│ │ ├───FavoritesPage
│ │ │ └───ui
│ │ ├───HomePage
│ │ │ └───ui
│ │ ├───NotFoundPage
│ │ │ └───ui
│ │ ├───ProductPage
│ │ │ └───ui
│ │ ├───ProfilePage
│ │ │ └───ui
│ │ ├───SignInPage
│ │ │ └───ui
│ │ └───SignUpPage
│ │ └───ui
│ ├───shared
│ │ ├───api
│ │ │ └───hooks
│ │ ├───assets
│ │ │ ├───icons
│ │ │ └───images
│ │ ├───hooks
│ │ ├───modal
│ │ │ └───ui
│ │ ├───providers
│ │ │ └───router
│ │ │ └───config
│ │ ├───store
│ │ │ ├───api
│ │ │ ├───HOCs
│ │ │ ├───hooks
│ │ │ ├───reducers
│ │ │ └───slices
│ │ ├───types
│ │ ├───ui
│ │ │ ├───Button
│ │ │ ├───ButtonBack
│ │ │ ├───Counter
│ │ │ ├───Input
│ │ │ ├───LikeButton
│ │ │ ├───LoadMore
│ │ │ ├───Logo
│ │ │ │ └───assets
│ │ │ ├───Price
│ │ │ ├───Rating
│ │ │ ├───SearchInput
│ │ │ ├───Sort
│ │ │ └───Spinner
│ │ └───utils
│ └───widgets
│ ├───CardList
│ │ └───ui
│ ├───CartList
│ │ └───ui
│ ├───Footer
│ │ └───ui
│ ├───Header
│ │ └───ui
│ ├───Product
│ │ ├───model
│ │ └───ui
│ ├───ReviewList
│ │ └───ui
│ │ └───ReviewForm
│ ├───SignInForm
│ │ ├───ui
│ │ └───utils
│ └───SignUpForm
│ ├───ui
│ └───utils
├───vite
└───webpack
```

### Проделано:

- [x] Выделены entities и features
- [x] Shared ui компоненты лишены бизнес логики и апи
- [x] Строгое соблюдение правил импортов по слоям
- [x] Часто встречающиеся компоненты (Button. Input и тд) вынесены в shared

## Цель 3: Оптимизация рендеров

### Проделано:

- [x] Компоненты, получающие неизменные props, обернуты в React.memo
- [x] Применены useMemo/useCallback там, где есть вычисления или колбэки

#### ✅ До/После с профайлером

Видим, что после лайка список не ререндериться как раньше

##### ДО
![лишние рендеры](https://github.com/user-attachments/assets/9b4b1d38-fcb4-4ab6-9ac1-ef3a30ebcfc6)

##### ПОСЛЕ
![Оптимизация рендеров](https://github.com/user-attachments/assets/820ab69b-6d92-4434-af82-f9e0b5477d2b)


## Цель 4: Модалка через React.Portal

### Проделано:

- [x] Реализован компонент Modal в src/shared/ui/Modal через ReactDOM.createPortal
- [x] Добавлена корректная обработка фокусов
- [x] Обернут в модалку компонент Product в CartList для демо

#### ✅ Демо модалки - фокусы сохраняются

![Модалка через портал](https://github.com/user-attachments/assets/1855f186-c3cb-4cbb-99d6-e1597361742c)


## Цель 5: useRef — реальное применение

### Проделано:

- [x] Применение useRef для фокуса в компоненте Modal
- [x] Применение UseRef для хранения состояния в хуке usePreviousValue

## Цель 6: Применение React 19 Hooks

### Проделано:

- [x] Применен хук useOptimistic для мгновенного добавления товара в избранное

#### ✅ Демо До/После

##### ДО
![лайк до оптимистика](https://github.com/user-attachments/assets/699806be-87e5-4f4e-b16e-178ac65c48c5)

##### ПОСЛЕ
![лайк c оптимистиком](https://github.com/user-attachments/assets/68e87bd9-a684-4fb8-bc47-011ac9d78e40)



Спасибо за внимание <3
