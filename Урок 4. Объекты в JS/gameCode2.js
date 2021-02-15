let event, ok,k=0;

function showWindow(text,answer1,answer2,answer3,answer4,q){
	do{
		ok = false;
		event = parseInt(prompt(text + answer1 + answer2 + answer3 + answer4 + '-1 - Выход из игры\n' + 'Введите 1, 2, 3 или 4.',''));

		if (event == -1){
			break;
		}
		else{
			ok = isAnswer(event,q);
		}
	} while (!ok);
}

showWindow(question.q1, question.option1Q1, question.option2Q1, question.option3Q1, question.option4Q1,4);

switch (event){
	case -1:
		break;
}

if (event != question.trueAnswer1) {console.log('Вы проиграли! Дано правильных ответов: ' + k);} 
	else{
		k++;
		showWindow(question.q2, question.option1Q2, question.option2Q2, question.option3Q2, question.option4Q2,4);
		if (event != question.trueAnswer2) {console.log('Вы проиграли! Дано правильных ответов: ' + k);} 
			else{
				k++;
			showWindow(question.q3, question.option1Q3, question.option2Q3, question.option3Q3, question.option4Q3,4);
			if (event != question.trueAnswer3) {console.log('Вы проиграли! Дано правильных ответов: ' + k);} 
				else{
					k++;
					showWindow(question.q4, question.option1Q4, question.option2Q4, question.option3Q4, question.option4Q4,4);
					if (event != question.trueAnswer4) {console.log('Вы проиграли! Дано правильных ответов: ' + k);}
						else{
							k++;
							showWindow(question.q5, question.option1Q5, question.option2Q5, question.option3Q5, question.option4Q5,4);
							if (event != question.trueAnswer5) {console.log('Вы проиграли! Дано правильных ответов: ' + k);}
								else{
									k++;
									showWindow(question.q6, question.option1Q6, question.option2Q6, question.option3Q6, question.option4Q6,4);
									if (event != question.trueAnswer6) {console.log('Вы проиграли! Дано правильных ответов: ' + k);} 
										else{
											k++;
											showWindow(question.q7, question.option1Q7, question.option2Q7, question.option3Q7, question.option4Q7,4);
											if (event != question.trueAnswer7) {console.log('Вы проиграли! Дано правильных ответов: ' + k);} 
												else{
													k++;
													showWindow(question.q8, question.option1Q8, question.option2Q8, question.option3Q8, question.option4Q8,4);
													if (event != question.trueAnswer8) {console.log('Вы проиграли! Дано правильных ответов: ' + k);} 
														else{
															k++;
															showWindow(question.q9, question.option1Q9, question.option2Q9, question.option3Q9, question.option4Q9,4);
															if (event != question.trueAnswer9) {console.log('Вы проиграли! Дано правильных ответов: ' + k);}
																else{
																	k++;
																	showWindow(question.q10, question.option1Q10, question.option2Q10, question.option3Q10, question.option4Q10,4);
																	if (event != question.trueAnswer10) {console.log('Вы проиграли! Дано правильных ответов: ' + k);} else console.log('Вы выиграли миллион!');}
														}
												}
										}
								}
						}
				}
		}
}

function isAnswer(event,q){
	if (isNaN(event)){
		alert('Вы ввели недопустимый символ');
		return false;
	} else if (event<1 || event>q || event==0){
		alert('Ваше число выходит из допустимого диапазона');
		return false;
	}
	return true;
}