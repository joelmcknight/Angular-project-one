import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

	messages = [
	{id: 0, text:`you got mail bruh`},
	{id: 1, text:`You have a new message`},
	{id: 2, text:`You have a new follower`}
	]

	update(id,text){
		this.messages = this.messages.map(m =>
			m.id ===id 
			? {id, text}
			: m
			)
	}


  constructor() { }

}
