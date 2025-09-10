#include <Adafruit_GFX.h>
#include <Adafruit_ILI9341.h>

#define TFT_CS 17
#define TFT_DC 20
#define TFT_RST 21
#define BUZZER_PIN 15

Adafruit_ILI9341 display = Adafruit_ILI9341(TFT_CS, TFT_DC, TFT_RST);

void showMessage(const char* title, const char* msg, uint16_t color) {
  display.fillScreen(ILI9341_BLACK);
  display.setCursor(20, 40);
  display.setTextColor(ILI9341_WHITE);
  display.setTextSize(2);
  display.print(title);

  display.setCursor(20, 100);
  display.setTextColor(color);
  display.setTextSize(2);
  display.print(msg);

  display.setCursor(20, 200);
  display.setTextColor(ILI9341_WHITE);
  display.setTextSize(2);
  display.print("System ready");
}

void triggerAlert() {
  showMessage("Emergency Alert", "Follow instructions!", ILI9341_RED);
  analogWrite(BUZZER_PIN, 128);  // Half volume
  delay(500);
  analogWrite(BUZZER_PIN, 0);
  delay(2000);
  showMessage("Kiosk", "System ready", ILI9341_GREEN);
}

void setup() {
  pinMode(BUZZER_PIN, OUTPUT);
  display.begin();
  showMessage("Kiosk", "Welcome!", ILI9341_GREEN);
}

void loop() {
  triggerAlert();
  delay(10000);
}
