## Установка и запуск

`npm i`, чтобы установить модули.

`npm test`, чтобы запустить тесты.

Если надо какие-то определенные тесты игнорировать, добавить `x` в начало названия метода, т. е `describe` -> `xdescribe`, `it` -> `xit`.

Если надо запустить только какие-то определенные тесты, по аналогии добавить `f`.

## Single-linked list

Реализовать класс `SingleLinkedList` и вспомогательный для него `ListNode`. Экспортироваться из модуля будет только основной, так что вспомогательный можно назвать как угодно.

- вспомогательный класс, как следует из названия, является элементом списка, содержит в себе значение `value` и ссылку на следующий элемент `next`; остальные детали реализации несущественны
- конструктор основного класса принимает любое кол-во аргументов: если они присутствуют, из них сразу собирается список
- реализованы методы:
  - `at(i)` - возвращает значение, лежащее в i-ом узле, либо `undefined`, если длина списка меньше
  - `get length` - геттер, который возвращает понятно что
  - `insert(value, i)` - добавляет значение в список; если `i` не указан, то вставляется в конец, если указан, то вставляется перед i-м узлом; если `i` больше, чем `length + 1`, то кидает ошибку
  - `remove(i)` - удаляет i-й узел и возвращает значение в нем; если `i` не указан, то удаляется последний узел; кидает ошибку, если длина списка меньше
  - `map`
  - `filter` (возвращают `SingleLinkedList`)
  - `reduce`
  - `sort` (возвращает новый список, не модифицирует исходный)
- реализован метод `[Symbol.iterator]`, чтобы объект можно было использовать там, где ожидается Iterable, такой как `Array`, `Map`, `Set`, `NodeList` и т. д.
  - например, можно будет обходить список циклом `for (... of ...)` или использовать spread `[...list]`
  - подробнее про это можно посмотреть [здесь](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of), пример реализации есть [там же](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of#iterating_over_other_iterable_objects)

## Sort strategy

Учимся применять ООП, знакомимся с паттерном Strategy.

Реализовать классы, в которых реализуется какой-нибудь вид сортировки, соответствующие такому интерфейсу (назовем его `Sorter`):
- конструктор принимает функцию-компаратор, которая принимает два параметра `(a, b)` и возвращает число:
  - отрицательное, если `a` меньше;
  - положительное, если `a` больше;
  - 0, если они равны;
- объект предоставляет метод `sort(array)`, который возвращает новый экземпляр массива, отсортированный согласно компаратору.

Т. е. можно будет сделать что-то вроде:
```javascript
const numSorter = new Sorter((a, b) => a - b);
sorter.sort([3, 1, 2]); // [1, 2, 3]
```
Реализовать 2 таких класса: один сортирующий каким-нибудь алгоритмом со сложностью `O(n^2)`, другой со сложностью `O(n * log(n))`. Например, можно взять сортировку пузырьком и быструю сортировку.

#### Запуск тестов

В файле `sort/test.js` сделать нужные импорты в строчках 7 и 8.

## HashTable

Реализовать класс `HashTable` классическим не-жс способом, через массив и самостоятельное хеширование ключа.

Ключами могут быть числа и строки.

Функцию хеширования выбрать самостоятельно.

Таблица должна балансироваться, поддерживать Load Factor не больше 8.

- `get(key)` - возвращает значение, соответствующее ключу, либо `undefined`, если такого ключа нет
- `set(key)` - добавить или заменить значение по ключу
- `remove(key)` - удалить пару ключ-значение
- `from(iterable)` - статический метод, возвращает новый экземпляр `HashTable`, составленный из пар ключ-значение в `iterable` (может быть, например, массивом).
  Пары могут быть представлены массивами из двух элементов либо объектами с полями `key` и `value`, надо поддерживать оба случая.
- `[Symbol.iterator]` - обходит все пары ключ-значение, отдаёт их в виде массива из двух элементов, `[key, value]`.
  Порядок обхода не важен, но должны быть пройдены все пары без повторов.
