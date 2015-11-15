var Game = function(size) {
	this.size = size;
    this.arr = [];

    for (var i = 0; i < size; i++) {
    	this.arr[i] = new Array(size+1).join(0).split('');
    	for (var j = 0; j < size; j++) {
    		this.arr[i][j] = 0;
    	};
    };


	this.neighboursSum = function(posX, posY) {
		var neighbours =0;
		if(this.arr[posX-1] && this.arr[posX-1][posY+1] || 0 ==1) neighbours++;
		if(this.arr[posX-1] && this.arr[posX-1][posY] || 0 ==1) neighbours++;
		if(this.arr[posX-1] && this.arr[posX-1][posY-1] || 0 ==1) neighbours++;
		if(this.arr[posX][posY-1] || 0==1) neighbours++;
		if(this.arr[posX][posY+1] || 0==1) neighbours++;
		if(this.arr[posX+1] && this.arr[posX+1][posY-1] || 0 ==1) neighbours++;
		if(this.arr[posX+1] && this.arr[posX+1][posY] || 0 ==1) neighbours++;
		if(this.arr[posX+1] && this.arr[posX+1][posY+1] || 0 ==1) neighbours++;
		return neighbours;			
	}
}
