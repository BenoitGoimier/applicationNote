(function() {

	angular.module('noteApp').controller('NoteController', [ '$scope', function($scope){
		$scope.messageNote = "";
		this.info = [];
		this.display = false;

		this.count = function(){
			return 100 - $scope.messageNote.length;
		};

		this.change = function(){
			if ((100 - $scope.messageNote.length) == 0) {
				this.info[0] = "danger";
				this.info[1] = "Plus de caractères !";
			} else if ((100 - $scope.messageNote.length) < 10) {
				this.info[0] = "danger";
				this.info[1] = "Plus beaucoup de caractères !";
			} else {
				this.info[0] = "warning";
				this.info[1] = "Note modifiée !";
			}
			this.display = true;
		};

		this.clear = function(){
			$scope.messageNote = "";
			this.display = false;
		};

		this.save = function(){
			this.info[0] = "success";
			this.info[1] = "Note sauvegardée !";
			this.display = true;
		};
	}]);

})();