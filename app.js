Vue.component('greeting', {
  template:'<p>Hello, My name is {{name}}. <button v-on:click="changeName">Change Name</button></p>',
  data: function(){
    return {
        name: 'Haruki'
    }
  },
  methods: {
    changeName: function() {
        this.name = 'Ding';
    }
  }
});

var one = new Vue({
  el:'#vue-app-one',
  data: {
    title: 'Vue App One',
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
    ],
    health:100,
    ended: false
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

    punch: function() {
      this.health -= 10;
      if(this.health <= 0) {
        this.ended = true;
      }
    },

    restart: function() {
      this.health = 100;
      this.ended = false;
    }
  },

  computed: {

    hello: function() {
      return 'Hello from App One';
    },
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

var two = new Vue({
  el:'#vue-app-two',
  data: {
    title: 'Vue App two'
  },
  methods: {
    changeAppOneTitle: function() {
      one.title = 'App one title changed';
    }
  },
  computed: {
    hello: function() {
      return 'Yo dudes, here is app Two';
    }
  }
});

two.title = 'App two title changed outside';
