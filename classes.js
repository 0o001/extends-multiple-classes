function Classes(...classes) {
    return class { 
        constructor() {
            Object.assign(this, ...classes);
        }
    }
}