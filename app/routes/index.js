import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.store.findAll('question');
    },
    actions: {
        saveQuestion(params) {
            var newQuestion = this.store
                .createRecord('question', params);
            newQuestion.save();
            this.transitionTo('index');
        },
    }
});