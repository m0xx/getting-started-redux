const LATENCY = 1000;

const api = {
    _employee: {
        firstName: 'Tiger',
        lastName: 'Woods'
    },
    fetchEmployee() {
        return new Promise((resolve) => {
            setTimeout(
                () => {
                     resolve(api._employee);
                },
                LATENCY
            )
        })
    },
    saveEmployee(employee) {
        api._employee = employee;

        return api.fetchEmployee();
    }
}

export const actions = {

}

export const selectors = {

}

const initialState = {
    isLoading: false,
    employee: null,
    form: {
        firstName: '',
        lastName: '',
    }
}

export default (state = initialState, action) => {
    return state;
}