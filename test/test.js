var assert = require('assert');
var should = require('should');

var user = {
    name: 'tj', 
    pets: ['tobi', 'loki', 'jane', 'bandit']
};



describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal(-1, [1,2,3].indexOf(4));
            user.should.have.property('name', 'tj');
            should.not.exist(null);
        });
    });
});
