$(document).ready(function(){
  var engsentence = new Array("So I said all right I'll take a look, I'll take a look. And as we were _________________________ of trying to work things out and _____ things and so forth","A week before I thought it was going to start Saudi Aramco's a Twitter ____ got a ______ which Aramco ________________", "So I was _______ to assist them directly after a funeral writing notes to help them take back their Twitter _______", "I used talent assessments _____ on new candidates to _____________ and also to _____ my juniors and seniors, it helped me get an ______ training budget for them", "I use community conferences, my network, I _______ like crazy from other places and good people and also if you have read it ________, tell youre boss this is a great resource, because every ___ they post for free", "And also dont always _________ just certificates or just a _____ if you get somebody in for a job and they start talking about their home lab and they are doing this __________ and they are _________ and they get that smile on their face that ____, those are the people that you want who will ___ in your organization it will bring really good ___", "One of the reasons why it took a while to do my contract negotiations was I wanted to __________ that I had a well organized team that had _____________ schedules", "And then they would _______. They could see daylight mornings, afternoons, nights they got to see _________ and got to see daylight and they almost never ______________, because they had a long weekend at the end of every week", "And when I say don't __________, it isn't just the base _____", "It's also going to affect their ____________ because they're going to think that they're ______ as well", " He said ________ we make people secuirty heroes", " And those who also _______ things they ____ also _____", "And he gave us really good metrics, beacuse when a lot of people see _________ emails ______________ their corporate email, they'll just ___________", "I had another guy Walter who built from the ground up of ________ system and even ____________ it info our central __________, so that the moment an _____ came, we could _________ five key pieces of information and do triage to see is this a ___________ most likely? ys or no it's just a issue will redo it", "So they will ____ you __________ they are well ____ the money",  "So we had I think five _______ in a six-month time period", "And I __________ these or anything similar they have 26 different exercises, a teacher and a student with VMs fully complete everything from _____ staff and setting up contacts with _________________, handling _____________ issues ____________ your CERTs", "Suddenly __ just guys on shift ____ guys with the business.", "And I had kind of _____ that, but I didn't think it was going to come so quickly and it was a good thing because many times your _____________________ your network");
  var korsentence =new Array("그래서 제안을 수락했고, 우리는 몇 달 동안 작업 계획과 협살 등에 대해 이야기를 나눴습니다.", "본격적으로 일을 시작하기 일주일 전에 사우디 아람코의 해외 트위터 계정이 손상되었습니다.", "그래서 저는 곧바로 트위터 계쩡을 살리기 위해 작업을 시작했습니다.", "저는 재능 평가 제도를 실시해서 신입뿐 아니라 기존의 선 후배 직원들을 솎아 냈고, 다행히 트레이닝 예산도 더 따낼 수 있었습니다.", "저는 커뮤니티 회의 뿐 아니라 인맥까지 다 동원해서 미친 듯이 다른 회사들의 인재들을 뒤졌습니다. ", "그리고 단순히 자격증이나 학위만 보고 판단하지 말고, 재택으로 일을 한다 해도 열정적이거나 빛나는 미소를 지녔다면, 그 사람이 바로 여러분의 조직이 필요한 멋진 가치를 실현할 수 있는 사람입니다.", "한동안 계약 협상을 길게 진행 하는 이유는 팀을 잘 꾸려서 적당한 업무 스케쥴을 짜고 싶었기 때문입니다. ", "그렇게 교대근무를 했고 아침, 오후, 밤을 골고루 보내고 동료들과 마주쳤습니다. 매주마다 긴 휴일이 있었기에 따로 휴가를 거의 내지도 않았습니다. ", "그리고 월급을 너무 낮게 책정하지 마십시오", "직원들은 늘 배려 받는다고 생각하기 때문에 자존감을 높이는 데에도 영향을 줍니다." , "그는 제게 직원들은 보안영웅으로 만들자고 제안했습니다. " , "보도를 한 사람도 포함되죠. " , "보통 많은 사람들이 회사를 통해 의심스러운 이메일을 받으며 즉시 삭제하기 때문에 그 사람은 정말 좋은 매트릭스를 우리에게 주는 것입니다. ", " 월터라는 또 다른 직원이 있었는데, 범죄과학시스템 전문가이고 우리의 중앙 바이러스 시스템에 그 기술을 접목시켰습니다. 그래서 경고가 발생했을 때 5개의 중요한 정보 조각들을 도출했고, 그것이 가짜 혹은 진짜 정보인지 등을 분류했습니다.", "그래서 돈으로는 환산 할 수 ㅇ벗는 엄청난 일들을 해냅니다.", "우리는 6개월의 기간동안 5개의 평가영역을 가집니다. ", "제가 강력 추천하건대, 26개의 다른 연습과제, 강사와 직원 선발부터 법무팀과의 연락을 조율하거나 여러분들의 CERT와 관련한 중요한 기반시설을 다루는등 모든것에 능통한 VM을 가진 학생들이 있습니다. ", "그저 일개 직원이 아니라, 경영과 맞물린 프로젝트를 수행하는 사람들이 되었지요. ", "어느정도 예상은 했지만, 이렇게 빨리 이루어질 것 이라고 생각을 못했고, 전문가들이 네트워크를 항상 감시하고 있기 때문에 더 좋았습니다.");
  var answer = new Array("talking through a few months, negotiate", "account, compromise, overseas runs", "scrambling, account", "both, weed some out, gauge, additional", "poached, blocked, quarter", "look for, degree, passionate, glow, excel, value", "make sure, appropriate rest", "rotate, each other, took vacation", "cheap out, salary", "self-esteem, behind as well", "how about", "reported, were, included", "suspicious, coming through, hit delete", "forensic, incorporated, antivirus, alert, pull back, false positive", "bring, amazing value, worth", "assessments", "highly recommend, recruiting, law enforcement, critical infrastructure", "not, but", "anticipated, analysts were monitoring");



  var engsen = $('#engsen');
  var korsen = $('#korsen');
  var ans = $('#answer');

  var i = Math.floor(Math.random() * 19);
  engsen.html(engsentence[i]);
  korsen.html(korsentence[i]);
  ans.html(answer[i]);
  ans.hide();



});

function checkans(){
  var ans = $("#answer");
  ans.show();
  var box = $('#answerbox');

  if(box.val() == ans.html()){
    alert("good");

    var engsentence = new Array("So I said all right I'll take a look, I'll take a look. And as we were _________________________ of trying to work things out and _____ things and so forth","A week before I thought it was going to start Saudi Aramco's a Twitter ____ got a ______ which Aramco ________________", "So I was _______ to assist them directly after a funeral writing notes to help them take back their Twitter _______", "I used talent assessments _____ on new candidates to _____________ and also to _____ my juniors and seniors, it helped me get an ______ training budget for them", "I use community conferences, my network, I _______ like crazy from other places and good people and also if you have read it ________, tell youre boss this is a great resource, because every ___ they post for free", "And also dont always _________ just certificates or just a ____ if you get somebody in for a job and they start talking about their home lab and they are doing this __________ and they are _________ and they get that smile on their face that ____, those are the people that you want who will ___ in your organization it will bring really good ___", "One of the reasons why it took a while to do my contract negotiations was I wanted to __________ that I had a well organized team that had _____________ schedules", "And then they would ______. They could see daylight mornings, afternoons, nights they got to see _________ and got to see daylight and they almost never ______________, because they had a long weekend at the end of every week", "And when I say don't __________, it isn't just the base _____", "It's also going to affect their ____________ because they're going to think that they're ______ as well", " He said ________ we make people secuirty heroes", " And those who also _______ things they ____ also _____", "And he gave us really good metrics, beacuse when a lot of people see _________ emails ______________ their corporate email, they'll just ___________", "I had another guy Walter who built from the ground up of ________ system and even ____________ it info our central __________, so that the moment an _____ came, we could _________ five key pieces of information and do triage to see is this a ___________ most likely? ys or no it's just a issue will redo it", "So they will ____ you __________ they are well ____ the money",  "So we had I think five _______ in a six-month time period", "And I __________ these or anything similar they have 26 different exercises, a teacher and a student with VMs fully complete everything from _____ staff and setting up contacts with _________________, handling _____________ issues ____________ your CERTs", "Suddenly __ just guys on shift ____ guys with the business.", "And I had kind of _____ that, but I didn't think it was going to come so quickly and it was a good thing because many times your _____________________ your network");
    var korsentence =new Array("그래서 제안을 수락했고, 우리는 몇 달 동안 작업 계획과 협살 등에 대해 이야기를 나눴습니다.", "본격적으로 일을 시작하기 일주일 전에 사우디 아람코의 해외 트위터 계정이 손상되었습니다.", "그래서 저는 곧바로 트위터 계쩡을 살리기 위해 작업을 시작했습니다.", "저는 재능 평가 제도를 실시해서 신입뿐 아니라 기존의 선 후배 직원들을 솎아 냈고, 다행히 트레이닝 예산도 더 따낼 수 있었습니다.", "저는 커뮤니티 회의 뿐 아니라 인맥까지 다 동원해서 미친 듯이 다른 회사들의 인재들을 뒤졌습니다. ", "그리고 단순히 자격증이나 학위만 보고 판단하지 말고, 재택으로 일을 한다 해도 열정적이거나 빛나는 미소를 지녔다면, 그 사람이 바로 여러분의 조직이 필요한 멋진 가치를 실현할 수 있는 사람입니다.", "한동안 계약 협상을 길게 진행 하는 이유는 팀을 잘 꾸려서 적당한 업무 스케쥴을 짜고 싶었기 때문입니다. ", "그렇게 교대근무를 했고 아침, 오후, 밤을 골고루 보내고 동료들과 마주쳤습니다. 매주마다 긴 휴일이 있었기에 따로 휴가를 거의 내지도 않았습니다. ", "그리고 월급을 너무 낮게 책정하지 마십시오", "직원들은 늘 배려 받는다고 생각하기 때문에 자존감을 높이는 데에도 영향을 줍니다." , "그는 제게 직원들은 보안영웅으로 만들자고 제안했습니다. " , "보도를 한 사람도 포함되죠. " , "보통 많은 사람들이 회사를 통해 의심스러운 이메일을 받으며 즉시 삭제하기 때문에 그 사람은 정말 좋은 매트릭스를 우리에게 주는 것입니다. ", " 월터라는 또 다른 직원이 있었는데, 범죄과학시스템 전문가이고 우리의 중앙 바이러스 시스템에 그 기술을 접목시켰습니다. 그래서 경고가 발생했을 때 5개의 중요한 정보 조각들을 도출했고, 그것이 가짜 혹은 진짜 정보인지 등을 분류했습니다.", "그래서 돈으로는 환산 할 수 ㅇ벗는 엄청난 일들을 해냅니다.", "우리는 6개월의 기간동안 5개의 평가영역을 가집니다. ", "제가 강력 추천하건대, 26개의 다른 연습과제, 강사와 직원 선발부터 법무팀과의 연락을 조율하거나 여러분들의 CERT와 관련한 중요한 기반시설을 다루는등 모든것에 능통한 VM을 가진 학생들이 있습니다. ", "그저 일개 직원이 아니라, 경영과 맞물린 프로젝트를 수행하는 사람들이 되었지요. ", "어느정도 예상은 했지만, 이렇게 빨리 이루어질 것 이라고 생각을 못했고, 전문가들이 네트워크를 항상 감시하고 있기 때문에 더 좋았습니다.");
    var answer = new Array("talking through a few months, negotiate", "account, compromise, overseas runs", "scrambling, account", "both, weed some out, gauge, additional", "poached, blocked, quarter", "look for, degree, passionate, glow, excel, value", "make sure, appropriate rest", "rotate, each other, took vacation", "cheap out, salary", "self-esteem, behind as well", "how about", "reported, were, included", "suspicious, coming through, hit delete", "forensic, incorporated, antivirus, alert, pull back, false positive", "bring, amazing value, worth", "assessments", "highly recommend, recruiting, law enforcement, critical infrastructure", "not, but", "anticipated, analysts were monitoring");



    var engsen = $('#engsen');
    var korsen = $('#korsen');
    var ans = $('#answer');

    var i = Math.floor(Math.random() * 19);
    engsen.html(engsentence[i]);
    korsen.html(korsentence[i]);
    ans.html(answer[i]);
    ans.hide();

    var box = $('#answerbox');
    box.val("");
  }else{
    alert("nono..");
  }


}
function cleardiv(){


}
