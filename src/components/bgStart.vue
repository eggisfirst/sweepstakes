<template>
  <div class="bgStart">
    <!-- <h2>Click and Hold to<br>Enter Warp Speed</h2> -->
  </div>
</template>

<script>
import '../js/bgStart'
export default {
  data() {
    return {
     
    }
  },
  mounted() {

  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
body {
	margin: 0;
	overflow: hidden;
}

h2 {
	position: absolute;
	color: white;
	max-width: 970px;
	margin: 0 auto;
	text-align: center;
	top: 50%;
	left: 0;
	right: 0;
	transform: translateY(-50%);
	font-family: 'brandon-grotesque', sans-serif;
	text-transform: uppercase;
	letter-spacing: 4px;
	font-size: 20px;
	pointer-events: none;
	padding: 0 15px;
  line-height: 40px;
}

@media screen and (min-width: 768px) {
	h2 {
		font-size: 32px;
	}
}

/*
* *----------------------------------
*  Social
* *----------------------------------
*/

.social-icon {
  display: none;
  a {
    position: absolute;
    background: white;
    color: white;
    box-shadow: -1px -1px 20px 0px rgba(0,0,0,0.30);
    display: inline-block;
    width: 150px;
    height: 80px;  
    transform-origin: 50% 50%;
    transition: .15s ease-out;
    z-index: 30;
  }
  
  i {
    position: absolute;
    pointer-events: none;
    z-index: 1000;
    transition: .15s ease-out;
  }
}

// YouTube 
.youtube {
  &:hover {
    a {
      transform: rotate(45deg) scale(1.05);
    }
    
    i {
      color: lighten(#E62117, 10%);
    }
  }
  
  a {
    bottom: -40px;
    left: -75px;
    transform: rotate(45deg);
  }
  
  i {
    bottom: 7px;
    left: 7px;
    color: #E62117;
  }
}

// Twitter
.twitter {
  &:hover {
    a {
      transform: rotate(-45deg) scale(1.05);
    }
    
    i {
      color: lighten(#00ACED, 10%);
    }
  }
  
  a {
    bottom: -40px;
    right: -75px;
    transform: rotate(-45deg);
  }
  
  i {
    bottom: 7px;
    right: 7px;
    color: #00ACED;
  }
}
</style>
