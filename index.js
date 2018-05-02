var app = new Vue({
  el: '#app',
  data: {
    colors: [],
    l: 0,
    maxWidth: 600,

    palettes: [
      ['#424874', '#FFCE66', '#83D1A3', '#AA2561', '#C4CFFF'],
      ['#247BA0', '#70C1B3', '#B2DBBF', '#F3FFBD', '#FF1654'],
      ['#00204A', '#00BBF0', '#005792', '#005792', '#FDB44B'],
      ['#05668D', '#028090', '#00A896', '#02C39A', '#F0F3BD'],
      ['#011627', '#FDFFFC', '#2EC4B6', '#E71D36', '#FF9F1C'],
      ['#50514F', '#F25F5C', '#FFE066', '#247BA0', '#70C1B3'],
      ['#E63946', '#F1FAEE', '#A8DADC', '#457B9D', '#1D3557'],
      ['#FFCDB2', '#FFB4A2', '#E5989B', '#B5838D', '#6D6875']
    ]
  },
  created () {
    var self = this
    self.colors = self.palettes[0]
    self.setSize()
    window.addEventListener('resize', () => { self.setSize() })
  },
  methods: {
    setSize() {
      if((window.innerWidth - 40) < this.maxWidth) this.l = window.innerWidth - 40
      else this.l = this.maxWidth
    },
    click(palette) {
      console.log('palette: ', palette)
      this.colors = palette
    }
  },
  computed: {
    r () {
      return this.l / 1.6180
    },
    wrapper () {
      return {
        borderTop:    (this.r)          + 'px solid' + this.colors[0],
        borderBottom: (this.l - this.r) + 'px solid' + this.colors[1],
        borderRight:  (this.r)          + 'px solid' + this.colors[2],
        borderLeft:   (this.l - this.r) + 'px solid' + this.colors[3]
      }
    },
    inner () {
      return {
        top:    -(this.r)          + 'px',
        left:   -(this.l - this.r) + 'px',
        width:   (this.l)          + 'px',
        height:  (this.l)          + 'px',
        color:                   this.colors[4],
        textShadow: '2px 2px ' + this.colors[0],
        fontSize: (this.l) * 0.27 + 'px'
      }
    }
  }
})
