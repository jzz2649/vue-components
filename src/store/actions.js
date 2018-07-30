import { throttle } from '../utils'

const delay = throttle((context,key,...v)=>{
  context.commit(key,...v);
});

const actions = {
  introduce(context, value){
    delay(context,"introduce", value);
  }
};

export default actions;