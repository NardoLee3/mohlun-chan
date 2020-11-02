import miscFunctions from "./misc";
import {intGenerator} from './misc'

var Singleton = (function(){
    var instance;

    function createInstance() {
        var userId = intGenerator(7);
        return userId;
    }

    return {
        getInstance: function() {
            if (!instance){
                instance = createInstance();
            }
            return instance;
        }
    };
})();

export default Singleton;