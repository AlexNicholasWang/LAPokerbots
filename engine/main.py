import random
import sys

def parseCard(cardNum):
    # colors, R, Y, G, B
    # for each color, 0123456789123456789SDRSDRW+
    # S is skip, D is draw two, R is reverse, W is wild, + is wild draw four
    card = ""
    color = (cardNum - (cardNum % 27)) / 27
    if(color == 0):
        card += 'R'
    elif(color == 1):
        card += 'Y'
    elif(color == 2):
        card += 'G'
    elif(color == 3):
        card += 'B'
    value = cardNum % 27
    if(value == 0):
        card += '0'
    elif(value == 1 or value == 10):
        card += '1'
    elif(value == 2 or value == 11):
        card += '2'
    elif(value == 3 or value == 12):
        card += '3'
    elif(value == 4 or value == 13):
        card += '4'
    elif(value == 5 or value == 14):
        card += '5'
    elif(value == 6 or value == 15):
        card += '6'
    elif(value == 7 or value == 16):
        card += '7'
    elif(value == 8 or value == 17):
        card += '8'
    elif(value == 9 or value == 18):
        card += '9'
    elif(value == 19 or value == 22):
        card += 'S'
    elif(value == 20 or value == 23):
        card += 'D'
    elif(value == 21 or value == 24):
        card += 'R'
    elif(value == 25):
        card += 'W'
    elif(value == 26):
        card += '+'
    return(card)

def runRound(playerCount):
    bets = []
    for i in range(0, playerCount):
        bets.append([-1,-1,-1,-1])
    cardNums = []
    for i in range(0, 107):
        cardNums.append(i)
    commonCards = []
    for i in range(0, 5):
        cardNum = random.randint(0, 107)
        while(cardNum not in cardNums):
            cardNum = random.randint(0, 107)
        commonCards.append(parseCard(cardNum))
        cardNums.remove(cardNum)
    playerCards = []
    for i in range(0, playerCount):
        currentPlayerCards = []
        for i in range(0, 2):
            cardNum = random.randint(0, 107)
            while(cardNum not in cardNums):
                cardNum = random.randint(0, 107)
            currentPlayerCards.append(parseCard(cardNum))
            cardNums.remove(cardNum)
        playerCards.append(currentPlayerCards)
def main():
    playerCount = len(sys.argv) - 1
    playerAlgorithmFilePaths = []
    for i in range(0, playerCount):
        playerAlgorithmFilePaths.append(sys.argv[i + 1])
    runRound(playerCount)

if __name__ == "__main__":
    main()

'''
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
'''
