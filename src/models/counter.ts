import { createModel } from '@captaincodeman/rdx'

export default createModel({
  state: 0,
  reducers: {
    inc(state) {
      return state + 1;
    },
    dec(state) {
      return state - 1;
    },
  },
})