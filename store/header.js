export const state = () => ({
  isHide: false,
})

export const mutations = {
  changeIsHide(state, isHide) {
    state.isHide = isHide
  },
}
