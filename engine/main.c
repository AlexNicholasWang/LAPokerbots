#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <string.h>

int main(int argc, char **argv){
  srand(time(NULL));
  int i, j, k;
  int players = argv[1][0] - 48;
  char algorithms[players][32];
  for(i = 2; i < 2 + players; i++){
    strcpy(argv[i], algorithms[i - 2]);
  }
  
  int bets[players][4];
  char commonCards[5][2];
  char playerCards[players][2][2];
  
  for(i = 0; i < players; i++){
    for(j = 0; j < 4; j++){
      bets[i][j] = 0;
    }
  }
  int cards[108];
  for(i = 0; i < 108; i++){
    cards[i] = i;
  }
  int card;
  for(i = 0; i < 5; i++){
    card = rand() % 108;
    
  }
  int round;
  for(i = 0; i < players; i++){
    for(j = 0; j < 2; j++){
      card = rand() % 108;
    }
  }
  return(0);
}




/*
  LLM explanation of rules
  UNO Poker (a.k.a. "Wild Flop"), the full crossover from that variant brainstorm. Poker betting structure, but played with an actual 108-card Uno deck. Here's the ruleset:

  Deck & deal: Standard 108-card Uno deck (four colors, numbers 0–9, plus Skips, Reverses, Draw Twos, Wilds, Wild Draw Fours). Each player gets 2 hole cards, then flop/turn/river with normal no-limit betting and blinds.

  Hand rankings (best 5 of 7, weakest to strongest): high card, pair, two pair, Run (5 in sequence, mixed colors), Color (5 of one color), Trips, full house, Color Run (sequence in one color), Quads, and the unbeatable Zero Set — all four 0s plus any Wild.

  Action cards:

  Skip on the board — the next community card is dealt face down and only revealed at showdown, so you're betting into an unseen card.
  Reverse on the board — hand rankings invert at showdown (worst hand wins); each subsequent Reverse flips it back.
  Draw Two on the board — both players immediately get a third hole card (best 5 of 8).
  Wild in hand — becomes any number+color at showdown, declared secretly to the engine.
  Wild Draw Four in hand — becomes any card at showdown, plus forces your opponent to reveal one random hole card the first time you bet or raise post-flop.

  The UNO rule: if you reach showdown with only one hole card mattering, the engine announces "UNO" and your hand gains +1 rank tier.

  One caveat from that conversation worth remembering: the Reverse inversion combined with Wild Draw Four's forced reveal might make it too swingy to converge over 500K hands — the suggested first fix was making Reverse flip betting order instead of inverting rankings.
*/
