import Ember from 'ember';

var appliances = [{
    model: 'Msuhfei 12',
    description: 'Jjsdh kuhsd Ku sdj ds asuhdkajs au adh jgef ajmsd jhsgd fjhsdgf uh gsdf jagdfjahsfd jagfj ashgajhsg dsjh ahsgj dhsa jhgd ajhs'
}, {
    model: 'Kksh 213k',
    description: 'Kskdj ksdfhk skek lsdfs if sc sdf siufyg jchgsd fusdhflsygfuslhcv suyv sjldhvg csjcbsduc sj us jsh sjhv csulv'
}, {
    model: 'Kjsk 83',
    description: 'Lltjhl lsdfl slgrlkv j zsdf zfg od ozdhaeoih ;zsh vauhv ;sh visf ahdigh hg ;agha rgh OSdfb ljkgsgiufdx; iuth kriurg bkerjg diug duh drg idu bkjh'
}];

export default Ember.Route.extend({
    model() {
        return appliances;
    }
});
