// ======================
// SELECTORS MODULE
// ======================
const UI = {
    title: document.querySelector(".counter__title"),
    value: document.querySelector(".counter__value"),
    increaseBtn: document.querySelector(".counter__button--increase"),
    decreaseBtn: document.querySelector(".counter__button--decrease"),
    resetBtn: document.querySelector(".counter__reset-button")
};

// ======================
// CONFIG MODULE
// ======================
const CONFIG = {
    max: 5,
    min: 0,
    defaultTitle: "Fancy Counter",
    limitTitle: "Don't cross limit"
};

// ======================
// STATE MODULE
// ======================
let count = 0;

// ======================
// LOGIC MODULE
// ======================
const Counter = {

    set(value) {
        count = Math.max(CONFIG.min, Math.min(CONFIG.max, value));
        this.render();
    },

    increase() {
        this.set(count + 1);
    },

    decrease() {
        this.set(count - 1);
    },

    reset() {
        this.set(0);
    },

    render() {
        UI.value.textContent = count;

        UI.title.textContent =
            count === CONFIG.max
                ? CONFIG.limitTitle
                : CONFIG.defaultTitle;
    }
};

// ======================
// EVENTS MODULE
// ======================
const Events = {

    bind() {
        UI.increaseBtn.addEventListener("click", () => Counter.increase());
        UI.decreaseBtn.addEventListener("click", () => Counter.decrease());
        UI.resetBtn.addEventListener("click", () => Counter.reset());

        document.addEventListener("keydown", this.handleKey);
    },

    handleKey(e) {
        if (e.key === "ArrowUp") Counter.increase();
        if (e.key === "ArrowDown") Counter.decrease();
    }
};

// ======================
// INIT
// ======================
function init() {
    Events.bind();
    Counter.render();
}

init();