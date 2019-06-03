
/**
 * @enum
 * @desc 数据
 */
const Enum = [
    { action: 'one', done: true },
    { action: 'two', done: false },
    { action: 'three', done: true },
    { action: 'four', done: false },
];

export class Model {
    user;
    items;

    constructor() {
        this.user = 'Adim';
        this.items = Enum.map(item => new TodoItem(item));
    }
}

export class TodoItem {
    action;
    done;

    constructor({ action, done }) {
        this.action = action;
        this.done = done;
    }
}
