

$(document).ready(setButtons);

function setButtons() {
    $("#competitions_table, #matches_table, #teams_table, #areas_table, #players_table_div").hide();
    $("#competitions").click(getCompetitions);
    $("#matches").click(getMatches);
    $("#teams").click(getTeams);
    $("#areas").click(getAreas);
    $("#players").click(getPlayersTable);
    $("#find_player").click(getPlayer);
    $("#cl").click(getCL);

}

function getCompetitions() {
  $.ajax({
    headers: { 'X-Auth-Token': ' 9952f05d5aa14aa8b17ceb82a2324689' },
    url: 'http://api.football-data.org/v2/competitions/',
    dataType: 'json',
    type: 'GET',
    }).done(function(response) {
    // do something with the response, e.g. isolate the id of a linked resource

    let dataArray = new Array(response.competitions)
    showCompetitionsResults(dataArray)
    toast('success', 'bottom-end')
    });
}

function getCL() {
  $.ajax({
    headers: { 'X-Auth-Token': ' 9952f05d5aa14aa8b17ceb82a2324689' },
    url: 'https://api.football-data.org/v2/competitions/CL/matches',
    dataType: 'json',
    type: 'GET',
    }).done(function(response) {
    // do something with the response, e.g. isolate the id of a linked resource
    console.log(response);

    let dataArray = new Array(response.competitions)

    });
}



function showCompetitionsResults(info) {
  $("#matches_table, #teams_table, #areas_table, #players_table_div").hide();
  $("#competitions_table").show();
  let table = $("table#competitions_table"),
      tbody = $("tbody"),
      tr, td;
    if (tbody.length > 0)
        tbody.remove();
    tbody = $("<tbody></tbody>");
    tbody.attr("id", "tbody");
    table.append(tbody);
    info.forEach((info) => {
      for (i = 0; i<info.length; i++){
      tr = $("<tr></tr>");
      td = $("<td></td>");
      td.html(info[i].id);
      tr.append(td);

      td = $("<td></td>");
      td.html(info[i].area.name);
      tr.append(td);

      td = $("<td></td>");
      td.html(info[i].name);
      tr.append(td);

      td = $("<td></td>");
      td.html(info[i].plan);
      tr.append(td);

      td = $("<td></td>");
      td.html(info[i].lastUpdated);
      tr.append(td);

      tbody.append(tr);
      }
    });

}

function getMatches() {
  $.ajax({
    headers: { 'X-Auth-Token': ' 9952f05d5aa14aa8b17ceb82a2324689' },
    url: 'http://api.football-data.org/v2/competitions/2018/matches',
    dataType: 'json',
    type: 'GET',
    }).done(function(response) {
    // do something with the response, e.g. isolate the id of a linked resource

    let dataArrayM = new Array(response.matches)
    showMatchesResults(dataArrayM)
    toast('success', 'bottom-end');
    animated()
    });
}

function showMatchesResults(info) {
  $("#competitions_table, #teams_table, #areas_table, #players_table_div").hide();
  $("#matches_table").show();
  let table = $("table#matches_table"),
      tbody = $("tbody"),
      tr, td;
    if (tbody.length > 0)
        tbody.remove();
    tbody = $("<tbody></tbody>");
    tbody.attr("id", "tbody");
    table.append(tbody);
    info.forEach((info) => {
      for (i = 0; i<info.length; i++){
      tr = $("<tr></tr>");
      td = $("<td></td>");
      td.html(info[i].id);
      tr.append(td);

      td = $("<td></td>");
      td.html(info[i].homeTeam.name);
      tr.append(td);

      td = $("<td></td>");
      td.html(info[i].score.fullTime.homeTeam);
      tr.append(td);

      td = $("<td></td>");
      td.html(info[i].awayTeam.name);
      tr.append(td);

      td = $("<td></td>");
      td.html(info[i].score.fullTime.awayTeam);
      tr.append(td);

      td = $("<td></td>");
      td.html(info[i].score.winner);
      tr.append(td);

      td = $("<td></td>");
      td.html(info[i].lastUpdated);
      tr.append(td);

      tbody.append(tr);
      }
    });

}

function getTeams() {
  $.ajax({
    headers: { 'X-Auth-Token': ' 9952f05d5aa14aa8b17ceb82a2324689' },
    url: 'http://api.football-data.org/v2/teams/',
    dataType: 'json',
    type: 'GET',
    }).done(function(response) {
    // do something with the response, e.g. isolate the id of a linked resource

    let dataArrayT = new Array(response.teams)
    showTeamsResults(dataArrayT)
    toast('success', 'bottom-end')
    });
}

function showTeamsResults(info) {
  $("#competitions_table, #matches_table, #areas_table, #players_table_div").hide();
  $("#teams_table").show();
  let table = $("table#teams_table"),
      tbody = $("tbody"),
      tr, td;
    if (tbody.length > 0)
        tbody.remove();
    tbody = $("<tbody></tbody>");
    tbody.attr("id", "tbody");
    table.append(tbody);
    info.forEach((info) => {
      for (i = 0; i<info.length; i++){
      tr = $("<tr></tr>");
      td = $("<td></td>");
      td.html(info[i].id);
      tr.append(td);

      td = $("<td></td>");
      td.html(info[i].area.name);
      tr.append(td);

      td = $("<td></td>");
      td.html(info[i].name);
      tr.append(td);

      td = $("<td></td>");
      td.html(info[i].shortName);
      tr.append(td);

      td = $("<td></td>");
      td.html(info[i].venue);
      tr.append(td);

      td = $("<td></td>");
      td.html(info[i].lastUpdated);
      tr.append(td);

      tbody.append(tr);
      }
    });

}

function getAreas() {
  $.ajax({
    headers: { 'X-Auth-Token': ' 9952f05d5aa14aa8b17ceb82a2324689' },
    url: 'http://api.football-data.org/v2/areas/',
    dataType: 'json',
    type: 'GET',
    }).done(function(response) {
    // do something with the response, e.g. isolate the id of a linked resource

    let dataArrayA = new Array(response.areas)
    showAreasResults(dataArrayA)
    toast('success', 'bottom-end')
    });
}

function showAreasResults(info) {
  $("#competitions_table, #matches_table, #teams_table, #players_table_div").hide();
  $("#areas_table").show();
  let table = $("table#areas_table"),
      tbody = $("tbody"),
      tr, td;
    if (tbody.length > 0)
        tbody.remove();
    tbody = $("<tbody></tbody>");
    tbody.attr("id", "tbody");
    table.append(tbody);
    info.forEach((info) => {
      for (i = 0; i<info.length; i++){
      tr = $("<tr></tr>");
      td = $("<td></td>");
      td.html(info[i].id);
      tr.append(td);

      td = $("<td></td>");
      td.html(info[i].name);
      tr.append(td);

      td = $("<td></td>");
      td.html(info[i].countryCode);
      tr.append(td);

      td = $("<td></td>");
      td.html(info[i].parentArea);
      tr.append(td);

      tbody.append(tr);
      }
    });

}
function getPlayersTable() {
  $("#competitions_table, #matches_table, #teams_table, #areas_table").hide();
  $("#players_table_div").show();
}

function getPlayer() {
  $.ajax({
    headers: { 'X-Auth-Token': ' 9952f05d5aa14aa8b17ceb82a2324689' },
    url: 'http://api.football-data.org/v2/players/' + $("#player_id").val(),
    dataType: 'json',
    type: 'GET',
    }).done(function(response) {
      let dataArrayP = new Array(response)
      showPlayersResults(dataArrayP)
      toast('success', 'bottom-end')
    });
}

function showPlayersResults(info) {
  let table = $("table#players_table"),
      tbody = $("tbody"),
      tr, td;
    if (tbody.length > 0)
        tbody.remove();
    tbody = $("<tbody></tbody>");
    tbody.attr("id", "tbody");
    table.append(tbody);
    info.forEach((info) => {

      tr = $("<tr></tr>");
      td = $("<td></td>");
      td.html(info.id);
      tr.append(td);

      td = $("<td></td>");
      td.html(info.name);
      tr.append(td);

      td = $("<td></td>");
      td.html(info.nationality);
      tr.append(td);

      td = $("<td></td>");
      td.html(info.shirtNumber);
      tr.append(td);

      td = $("<td></td>");
      td.html(info.position);
      tr.append(td);

      tbody.append(tr);

    });

}


function toast(type, position) {
    const toast = swal.mixin({
        toast: true,
        position: position,
        showConfirmButton: false,
        timer: 3000
    });

    toast({
        type: type,
        title: 'Api consultada con Exito'
    })
}
