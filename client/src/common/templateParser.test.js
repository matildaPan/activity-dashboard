import {expect} from 'chai';
import {parse} from './templateParser';
import React from 'react';
import ProfileContainer from '../profile/profile.container';
import { TaskContainer } from '../task/task.container';

describe('parse', function() {
  it('should return an arrary of component and string presenting the activity template', ()=> {
    const patternComponentMap = {
      "{ profiles:122 }": <ProfileContainer id={122} key={122}/>,
      "{ task:111 }": <TaskContainer id={111} key={111}/>
    }
    const template = "{ profiles:122 } posted a task { task:111 }"
    const expected = [<ProfileContainer id={122} key={122}/>, " POSTED A TASK ", <TaskContainer id={111} key={111}/>]
    const result = parse(patternComponentMap, template);
    expect(result).to.be.an('array');
    expect(result[0]).to.eql(expected[0]);
    expect(result[1]).to.equal(expected[1]);
    expect(result[2]).to.eql(expected[2]);
  });

});