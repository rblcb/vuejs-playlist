new Vue({
  el:'#vue-app',
  data: {
    name: 'Ding',
    job: 'Dev',
    website:'https://tshulgin.wixsite.com/dingying',
    websiteTag: '<a href="https://tshulgin.wixsite.com/dingying">DingYing Net</a>',
    age: 25,
    x: 0,
    y: 0,
    a:0,
    b:0,
    available:false,
    nearby:false,
    error:false,
    success:false,
    characters: ['Angry', 'Sad', 'Happy'],
    ninjas: [
      {name: 'Wang', age: 25},
      {name: 'Zheng', age: 20},
      {name: 'Cui', age: 30}
    ]
  },
  methods: {
    greet: function(time){
      return 'Good' + ' ' + time + ' ' + this.name;
    },

    add: function(inc){
      this.age += inc;
    },

    subtract: function(dec){
      this.age -= dec;
    },

    UpdateXY: function(event) {
      this.x = event.offsetX,
      this.y = event.offsetY
    },

    click: function() {
      alert('You clicked me');
    },

    enterName: function() {
      console.log('You entered name');
    },

    enterAge: function() {
      console.log('You entered age');
    },
    /*
    addToA: function() {
      console.log('addToA');
      return this.age + this.a;
    },

    addToB: function() {
      console.log('addToB');
      return this.age + this.b;
    }*/
  },

  computed: {
    addToA: function() {
      console.log('addToA');
      return this.age + this.a;
    },

    addToB: function() {
      console.log('addToB');
      return this.age + this.b;
    },
    compClass: function() {
      return {
        available: this.available,
        nearby: this.nearby
      }
    }
  }
});
