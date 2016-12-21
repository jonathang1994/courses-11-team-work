new Vue({
  el: '#app',
  data: {
    page: 0,
    pages: [],
  	months: {
  		January: {
  			commitment: 'I want to jump trees'
  		},
  		February: {
  			commitment: ''
  		},
  		March: {
  			commitment: ''
  		},
  		April: {
  			commitment: ''
  		},
  		May: {
  			commitment: ''
  		},
  		June: {
  			commitment: ''
  		},
  		July: {
  			commitment: ''
  		},
  		August: {
  			commitment: ''
  		},
  		September: {
  			commitment: ''
  		},
  		October: {
  			commitment: ''
  		},
  		November: {
  			commitment: ''
  		},
  		December: {
  			commitment: ''
  		}
  	},
    selectedCommitment: '',
    selectedMonth: '',
    formData: {
    	month: '',
    	commitment: ''
    },
    input: ''
  },
  methods: {
  	commitment: function(month){
  		this.selectedMonth = month;
  		this.selectedCommitment = this.months[month].commitment;
  		$( "#commitment-popup" ).fadeIn(350);
  	},
  	saveCommitment: function(month){
  		this.months[month].commitment = this.selectedCommitment;
  	},
  	popupClose: function(month){
  		$( "#commitment-popup" ).fadeOut(350);
  	},
    loadPage: function(pageNumber){
      $.get(pageNumber.href, function( data ) {
        $( "#course-page" ).html( data );
      });
    },
    changePage: function(type){
      var self = this;

      // current page
      var currentPage = this.page;
      var nextPage = currentPage+1;
      
      self.loadPage(self.pages[nextPage]);
    }
  },
  ready: function(){
    var self = this;
    $.getJSON('/pages/schema.json', function (data) {
      self.pages = data.pages;

      // run page load
      self.loadPage(self.pages[self.page]);
    });


  }

});

