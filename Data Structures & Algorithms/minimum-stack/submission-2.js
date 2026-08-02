class MinStack {
    constructor() {
        this.stack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        const minValue = Math.min(this.stack.length > 0 ? this.stack.at(-1).min : Infinity, val)
        this.stack.push({value: val, min: minValue})

        return null
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop()
        return null
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack.at(-1).value
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.stack.at(-1).min
    }

}